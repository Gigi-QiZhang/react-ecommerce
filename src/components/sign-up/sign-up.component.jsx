import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { signUpStart } from '../../redux/user/user.actions.js';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        // const { signUpStart } = this.props;
        if (password !== confirmPassword) {
            alert("password do not match");
            return;
        }
        signUpStart({ displayName, email, password });
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({...userCredentials, [name]: value});
    };

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form> 
        </SignUpContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);

// class SignUp extends Component {
//     constructor() {
//         super();

//         this.state = {
//             displayName: '',
//             email: '',
//             password: '',
//             confirmPassword: ''
//         }
//     }

//     handleSubmit = async event => {
//         event.preventDefault();
//         const { signUpStart } = this.props;
//         const { displayName, email, password, confirmPassword } = this.state;
        
//         if (password !== confirmPassword) {
//             alert("password do not match");
//             return;
//         }

//         signUpStart({ displayName, email, password });

//         // removd after sagas
//         // try {
//         //     const { user } = await auth.createUserWithEmailAndPassword(email, password);
//         //     await createUserProfileDocument(user, { displayName });
//         //     this.setState({
//         //         displayName: '',
//         //         email: '',
//         //         password: '',
//         //         confirmPassword: ''
//         //     });
//         // } catch (error) {
//         //     console.log(console.error());
//         // }   
//     };

//     handleChange = event => {
//         const { name, value } = event.target;

//         this.setState({[name]: value});
//     };


//     render() {
//         const { displayName, email, password, confirmPassword } = this.state;
//         return (
//             <SignUpContainer>
//                 <SignUpTitle>I do not have an account</SignUpTitle>
//                 <span>Sign up with your email and password</span>
//                 <form onSubmit={this.handleSubmit}>
//                     <FormInput
//                         type='text'
//                         name='displayName'
//                         value={displayName}
//                         onChange={this.handleChange}
//                         label='Display Name'
//                         required
//                     />
                 
//                     <FormInput
//                         type='email'
//                         name='email'
//                         value={email}
//                         onChange={this.handleChange}
//                         label='Email'
//                         required
//                     />
                   
//                     <FormInput
//                         type='password'
//                         name='password'
//                         value={password}
//                         onChange={this.handleChange}
//                         label='Password'
//                         required
//                     />
                   
//                     <FormInput
//                         type='password'
//                         name='confirmPassword'
//                         value={confirmPassword}
//                         onChange={this.handleChange}
//                         label='Confirm Password'
//                         required
//                     />
//                     <CustomButton type='submit'>SIGN UP</CustomButton>
//                 </form> 
//             </SignUpContainer>
//         );
//     }
// };



// import './sign-up.styles.scss';
// class SignUp extends Component {
//     constructor() {
//         super();
//         this.state = {
//             displayName: '',
//             email: '',
//             password: '',
//             confirmPassword: ''
//         }
//     }

//     handleSubmit = async event => {
//         event.preventDefault();
//         const { displayName, email, password, confirmPassword } = this.state;
//         if (password !== confirmPassword) {
//             alert("password do not match");
//             return;
//         }

//         try {
//             const { user } = await auth.createUserWithEmailAndPassword(email, password);
//             await createUserProfileDocument(user, { displayName });
//             this.setState({
//                 displayName: '',
//                 email: '',
//                 password: '',
//                 confirmPassword: ''
//             });

//         } catch (error) {
//             console.log(console.error());
//         }   
//     };

//     handleChange = event => {
//         const { name, value } = event.target;
//         this.setState({[name]: value});
//     };


//     render() {
//         const { displayName, email, password, confirmPassword } = this.state;
//         return (
//             <div>
//                 <h2 className='title'>
//                     I do not have an account
//                 </h2>
//                 <span>
//                     Sign up with your email and password
//                 </span>
//                 <form>
//                     <FormInput
//                         type='text'
//                         name='displayName'
//                         value={displayName}
//                         onChange={this.handleChange}
//                         label='Display Name'
//                         required
//                     />
                 
//                     <FormInput
//                         type='email'
//                         name='email'
//                         value={email}
//                         onChange={this.handleChange}
//                         label='Email'
//                         required
//                     />
                   
//                     <FormInput
//                         type='password'
//                         name='password'
//                         value={password}
//                         onChange={this.handleChange}
//                         label='Password'
//                         required
//                     />
                   
//                     <FormInput
//                         type='password'
//                         name='confirmPassword'
//                         value={confirmPassword}
//                         onChange={this.handleChange}
//                         label='Confirm Password'
//                         required
//                     />
//                     <CustomButton type='submit' onClick={this.handleSubmit}>SIGN UP</CustomButton>
//                 </form> 
//             </div>
//         )
//     }
// };

// export default SignUp;