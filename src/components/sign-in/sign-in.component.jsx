import React, { useState } from 'react'; // use useState hook
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './sign-in.styles';

// convert class component to hook 
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ 
        email: '', 
        password: '' 
    });
    // const { emailSignInStart } = this.props;
    // const { email, password } = this.state;
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);
    };

   const handleChange = event => {
        const { value, name } = event.target;
        // this.setState({ [name]: value });
        setCredentials({...userCredentials, [name]: value });
    };

    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email'
                    handleChange={handleChange}
                    value={email} 
                    label='email'
                    required
                />
                <FormInput 
                    name='password' 
                    type='password'
                    handleChange={handleChange}
                    value={password}
                    label='password'
                    required
                />
                <ButtonsBarContainer>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton onClick={googleSignInStart} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer> 
    )
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password }))
});
  
export default connect(null, mapDispatchToProps)(SignIn);


//****************************************************************************************
// Use sagas middleware

// class SignIn extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: ''
//         }
//     }
  
//     handleSubmit = async event => {
//         event.preventDefault();
//         const { emailSignInStart } = this.props;
//         const { email, password } = this.state;

//         emailSignInStart(email, password);
//         // try {
//         //     await auth.signInWithEmailAndPassword(email, password);
//         //     this.setState({ email: '', password: '' });
//         // } catch (error) {
//         //     console.log(error);
//         // }
//     };

//     handleChange = event => {
//         const { value, name } = event.target;
//         this.setState({ [name]: value });
//     };

//     render() {
//         const { googleSignInStart } = this.props;
//         return (
//             <SignInContainer>
//                 <SignInTitle>I already have an account</SignInTitle>
//                 <span>Sign in with your email and password</span>
//                 <form onSubmit={this.handleSubmit}>
//                     <FormInput 
//                         name='email' 
//                         type='email'
//                         handleChange={this.handleChange}
//                         value={this.state.email} 
//                         label='email'
//                         required
//                     />
//                     <FormInput 
//                         name='password' 
//                         type='password'
//                         handleChange={this.handleChange}
//                         value={this.state.password}
//                         label='password'
//                         required
//                     />
//                     <ButtonsBarContainer>
//                         <CustomButton type='submit'>Sign in</CustomButton>
//                         {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn> */}
//                         <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
//                             Sign in with Google
//                         </CustomButton>
//                     </ButtonsBarContainer>
//                 </form>
//             </SignInContainer> 
//         )
//     }
// }

// const mapDispatchToProps = dispatch => ({
//     googleSignInStart: () => dispatch(googleSignInStart()),
//     emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
// });
  
// export default connect(null, mapDispatchToProps)(SignIn);

//****************************************************************************************

// import './sign-in.styles.scss';
// class SignIn extends Component {
//     constructor(props) {
//         super(props);
    
//         this.state = {
//             email: '',
//             password: ''
//         }
//     }
//     // handleSubmit = e => {
//     //     e.prevenntDefault();
//     //     this.setState({ email:'', password:''})
//     // }
//     handleSubmit = async event => {
//         event.preventDefault();

//         const { email, password } = this.state;

//         try {
//             await auth.signInWithEmailAndPassword(email, password);
//             this.setState({ email: '', password: '' });
//         } catch (error) {
//             console.log(error);
//         }
//         // this.setState({ email:'', password:''})
//     };

//     handleChange = event => {
//         const { value, name } = event.target;
//         this.setState({ [name]: value });
//     }

//     render() {
//         return (
//             <div className='sign-in'>
//                 <h2>I already have an account</h2>
//                 <span>Sign in with your email and password</span>
//                 <form onSubmit={this.handleSubmit}>
//                     <FormInput 
//                         name='email' 
//                         type='email' 
//                         // onChange={this.handleChange}
//                         handleChange={this.handleChange}
//                         value={this.state.email} 
//                         label='email'
//                         required
//                     />
//                     {/* <label>Email</label> */}
//                     <FormInput 
//                         name='password' 
//                         type='password'
//                         // onChange={this.handleChange}
//                         handleChange={this.handleChange}
//                         value={this.state.password}
//                         label='password'
//                         required
//                     />
//                     {/* <label>Password</label> */}
//                     <div className='buttons'>
//                         <CustomButton type='submit'>Sign in</CustomButton>
//                         <CustomButton 
//                             onClick={signInWithGoogle} 
//                             isGoogleSignIn
//                         >
//                             Sign in with Google
//                         </CustomButton>
//                     </div>
//                 </form>
//             </div> 
//         )
//     }
// }

// export default SignIn;