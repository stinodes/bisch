import { signInAnonymously } from 'firebase/auth'
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import { auth } from '../services/firebase'

const AuthContext = createContext({ authenticated: false })

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    signInAnonymously(auth).then(() => setAuthenticated(true))
  }, [])

  const value = useMemo(() => ({ authenticated }), [authenticated])

  return (
    <AuthContext.Provider value={value}>
      {authenticated && children}
    </AuthContext.Provider>
  )
}
