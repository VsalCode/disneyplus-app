import React, { useState } from "react";
import styles from './index.module.css'
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate()

  const { login, loading, error } = useAuth({
    onSuccess: () => {
      nav('/')
    }
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(email, password)
  };

  return (
    <div className={styles.container}>
      <img width="60px" className={styles.logo} src="/public/images/disney-plus-hotstar-logo.svg" alt="" />
      <h1>Login Page</h1>
      <h4>welcome back!</h4>
      <form action="" onSubmit={handleSubmit} className={styles.formWrapper}>
        <input 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        type="text" 
        placeholder="input your Email" />
        <input 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        type="password" 
        placeholder="input password" />
        <button type="submit">{loading ? `Loading...` : `Login` }</button>
        <span className={styles.errorText}>{error}</span>
      </form>
    </div>
  );
};

export default Login;
