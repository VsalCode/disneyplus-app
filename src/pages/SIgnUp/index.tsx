import React, { useState } from "react";
import styles from './index.module.css'
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser, error, loading } = useAuth()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUser(email, password)
  }

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
