import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import { supabase } from '../core/lib/supabase'

type UserRole = 'super_admin' | 'admin' | 'client'

interface User {
  id: string
  email: string
  role: UserRole
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<any>
  signUp: (email: string, password: string) => Promise<any>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
)

export function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      async (_, session) => {
        if (session?.user) {
          const email = session.user.email || ''

          let role: UserRole = 'client'

          if (email.includes('superadmin')) {
            role = 'super_admin'
          } else if (email.includes('admin')) {
            role = 'admin'
          }

          setUser({
            id: session.user.id,
            email,
            role,
          })
        } else {
          setUser(null)
        }

        setLoading(false)
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  async function getSession() {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (session?.user) {
      const email = session.user.email || ''

      let role: UserRole = 'client'

      if (email.includes('superadmin')) {
        role = 'super_admin'
      } else if (email.includes('admin')) {
        role = 'admin'
      }

      setUser({
        id: session.user.id,
        email,
        role,
      })
    }

    setLoading(false)
  }

  async function signIn(
    email: string,
    password: string
  ) {
    return supabase.auth.signInWithPassword({
      email,
      password,
    })
  }

  async function signUp(
    email: string,
    password: string
  ) {
    return supabase.auth.signUp({
      email,
      password,
    })
  }

  async function signOut() {
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}