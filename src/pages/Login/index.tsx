import React, { useState } from "react";
import styles from './index.module.css'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(Login);
  };

  return (
    <div className={styles.container}>
      <h1>Login Page</h1>
      <form action="" onSubmit={handleSubmit} className={styles.formWrapper}>
        <input 
        onChange={(e) => setUsername(e.target.value)} 
        value={username} 
        type="text" 
        placeholder="input username" />
        <input 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        type="password" 
        placeholder="input password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
