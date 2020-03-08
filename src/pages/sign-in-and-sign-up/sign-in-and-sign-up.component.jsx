import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUp = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

// import './sign-in-and-sign-up.styles.scss';

// const SignInAndSignUP = () => (
//     <div className='sign-in-and-sign-up'>
//         <SignIn/>
//         <SignUp/>
//     </div>
// );

export default SignInAndSignUp;