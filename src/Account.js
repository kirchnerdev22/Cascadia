import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// AccountPage component
function Account() {
  return (
    <div className="account-page">
      <h1>My Account</h1>
      <p>Welcome to your account page. Please select an option:</p>
      <div className="account-options">
        <Login />
        <CreateAccount />
      </div>
    </div>
  );
}

// Login component
function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic with loginEmail and loginPassword
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <Link to="/forgot-password">Forgot Password?</Link>
    </div>
  );
}

// CreateAccount component
function CreateAccount() {
  const [createEmail, setCreateEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  const handleCreateAccount = () => {
    // Handle account creation logic with createEmail, createPassword, and verifyPassword
  };

  return (
    <div className="create-account-form">
      <h2>Create an Account</h2>
      <input
        type="email"
        placeholder="Email"
        value={createEmail}
        onChange={(e) => setCreateEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={createPassword}
        onChange={(e) => setCreatePassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Verify Password"
        value={verifyPassword}
        onChange={(e) => setVerifyPassword(e.target.value)}
      />
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
}

export default Account ;
