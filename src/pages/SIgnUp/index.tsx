import React, { useState } from "react";
import styles from './index.module.css'
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("")
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const { createUser, error, loading } = useAuth({
    onSuccess: () => {
      navigate('/login')
    }
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUser(email, password, name)
  }

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <form action="" onSubmit={handleSubmit} className={styles.formWrapper}>
      <input 
      required
        onChange={(e) => setName(e.target.value)} 
        value={name} 
        type="text" 
        placeholder="create your username" />
        <input 
        required
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        type="text" 
        placeholder="input your email account" />
        <input 
        required
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
