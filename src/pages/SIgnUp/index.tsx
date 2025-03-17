import React, { useState } from "react";
import styles from './index.module.css'
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { createUser, error: signUpError, loading: signUpLoading, loading: redirectLoading } = useAuth({
    onSuccess: () => {
      navigate('/login');
    }
  });
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUser(email, password, name);
  };

  const handleRedirectToLogin = () => {
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <img width="60px" className={styles.logo} src="/public/images/disney-plus-hotstar-logo.svg" alt="" />
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
          type="email" 
          placeholder="input your email account" />
        <input 
          required
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
          type="password" 
          placeholder="create password" />
        <button className={styles.signupButton} type="submit">
          {signUpLoading ? 'loading...' : "Sign Up"}
        </button>
        {signUpError && <span className={styles.errorText}>{signUpError}</span>}
      </form>

      <button 
        className={styles.RedirectToLoginButton} 
        onClick={handleRedirectToLogin}
      >
        Have an account
      </button>
    </div>
  );
};

export default SignUp;