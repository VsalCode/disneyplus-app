import React, { useState } from "react";
import styles from './index.module.css'
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const { createUser, error: signUpError, loading } = useAuth({
    onSuccess: () => {
      navigate('/login');
    }
  });
  
  const validatePassword = (password: string) => {
    if (password.length < 8) {
      setPasswordError("Password harus minimal 8 karakter");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password harus mengandung huruf besar");
      return false;
    }
    if (!/[0-9]/.test(password)) {
      setPasswordError("Password harus mengandung angka");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validasi email sederhana
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setPasswordError("Format email tidak valid");
      return;
    }

    // Validasi password
    if (!validatePassword(password)) {
      return;
    }

    try {
      await createUser(email, password, name);
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  const handleRedirectToLogin = () => {
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <img 
        width="60px" 
        className={styles.logo} 
        src="/images/disney-plus-hotstar-logo.svg" 
        alt="Disney+ Hotstar Logo" 
      />
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <label htmlFor="username" className={styles.srOnly}>Username</label>
        <input 
          id="username"
          required
          aria-required="true"
          onChange={(e) => setName(e.target.value)} 
          value={name} 
          type="text" 
          placeholder="Buat username Anda"
          aria-label="Username"
        />

        <label htmlFor="email" className={styles.srOnly}>Email</label>
        <input 
          id="email"
          required
          aria-required="true"
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
          type="email" 
          placeholder="Masukkan alamat email"
          aria-label="Email"
        />

        <label htmlFor="password" className={styles.srOnly}>Password</label>
        <input 
          id="password"
          required
          aria-required="true"
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }} 
          value={password} 
          type="password" 
          placeholder="Buat kata sandi"
          aria-label="Password"
        />

        {passwordError && (
          <span className={styles.errorText} role="alert">
            {passwordError}
          </span>
        )}

        <button 
          className={styles.signupButton} 
          type="submit"
          disabled={loading}
        >
          {loading ? 'Sedang proses...' : "Daftar"}
        </button>

        {signUpError && (
          <span className={styles.errorText} role="alert">
            {signUpError}
          </span>
        )}
      </form>

      <button 
        className={styles.RedirectToLoginButton} 
        onClick={handleRedirectToLogin}
      >
        Sudah punya akun
      </button>
    </div>
  );
};

export default SignUp;