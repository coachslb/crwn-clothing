import React from 'react';

import SignIn from '../../components/sign-in/SignIn';

import './sign.scss';
import SignUp from '../../components/sign-up/SignUp';

const SignPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignPage;
