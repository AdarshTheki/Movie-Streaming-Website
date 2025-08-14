import React from 'react';
import { useSelector } from 'react-redux';
import SignUp from './SignUp';
import Login from './Login';
import './AuthScreen.scss';

const SignUpScreen = () => {
  const user = useSelector((state) => state?.user?.user);

  return <div>{!user ? <SignUp /> : <Login />}</div>;
};
export default SignUpScreen;
