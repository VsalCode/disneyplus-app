import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile, User } from "firebase/auth"
import { useState } from "react"

interface Params{
  onError?: (error: string) => void,
  onSuccess?: (user: User) => void,

}

const useAuth = (params: Params = {}) => {
  const { onError, onSuccess } = params

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const createUser = async (email: string, password: string, name: string) => {
    const auth = getAuth()
    try {
      setError("")
      setLoading(true)
      const response = await createUserWithEmailAndPassword(auth, email, password)
      setLoading(false)
      if(auth.currentUser){
        updateProfile(auth.currentUser, { 
          displayName: name
         } )
      }

      if(typeof onSuccess === "function"){
        onSuccess(response.user)
      }

    } catch (error: any) {
      setError(error.message)
      setLoading(false)
      if(typeof onError === "function"){
        onError(error.message)
      }
    }
  }
  
  const login = async (email: string, password: string) => {
    try {
      setLoading(true)
      const auth =  getAuth()
      setError("")
      const response = await signInWithEmailAndPassword(auth, email, password)
      setLoading(false)
      if(typeof onSuccess === "function"){
        onSuccess(response.user)
      }
    } catch (error: any) {
      setError(error.message)
      setLoading(false)
      if(typeof onError === "function"){
        onError(error.message)
      }
    }

  }

  
  const logout = async () => {
    
    try {
      setLoading(true)
      const auth =  getAuth()
      await signOut(auth)
      setError("")
    } catch (error: any) {
      setError(error.message)
      setLoading(false)
    }

  }

  return{
    createUser,
    login,
    logout,
    loading,
    error
  }
}

export default useAuth
