import React, { useState } from "react";
import styles from './index.module.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const nav = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth()

    try {
      setError("")
      setLoading(true)
      const credentials = await createUserWithEmailAndPassword(auth, email, password)
      console.log(credentials);

      nav("/login")
    } catch (error: any) {
      setError(error.message)
    }
    setLoading(false)
  };

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <form action="" onSubmit={handleSubmit} className={styles.formWrapper}>
        <input 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        type="text" 
        placeholder="input your email account" />
        <input 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        type="password" 
        placeholder="create password" />
        <button type="submit">{loading ? 'loading...' : "Sign Up"}</button>
        { error && <span className={styles.errorText}>{error}</span> }
      </form>
    </div>
  );
};

export default SignUp;
