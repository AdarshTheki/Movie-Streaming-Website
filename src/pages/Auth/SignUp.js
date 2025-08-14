import React, { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

const SignUp = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        alert(`create a new user success 👍 \n ${authUser.user.email}`);
        navigate('/profile');
      })
      .catch((err) => {
        alert(`something was wrong ! \n ${err.message}`);
      });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Signup Page</h1>
        <form className="form" onSubmit={register}>
          <input ref={emailRef} type="text" placeholder="Email" required />
          <input
            ref={passwordRef}
            type="text"
            placeholder="Password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <div className="form-detail">
          <p>
            You are already existing user?{' '}
            <NavLink to="/login">Login now</NavLink>
          </p>
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.{' '}
            <NavLink to="https://www.google.com/recaptcha/intro/">
              Google reCAPTCHA
            </NavLink>{' '}
            to ensure you are not a bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
