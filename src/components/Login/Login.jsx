import React from 'react'
import "./Login.css";

function Login() {
  return (
    <div className="form-popup">
        <span className="close-btn material-symbols-rounded">close</span>
        <div className="form-box login">
            <div className="form-details">
                <h2>Welcome Back</h2>
                <p>Please log in using your personal information to stay connected with us.</p>
            </div>
            <div className="form-content">
                <h2>LOGIN</h2>
                <form action="#">
                    <div className="input-field">
                        <input type="text" required />
                        <label>Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <a href="#" className="forgot-pass-link">Forgot password?</a>
                    <button type="submit">Log In</button>
                </form>
                <div className="bottom-link">
                    Don't have an account?
                    <a href="#" id="signup-link">Signup</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login