import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles..scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            email: '',
            password: ''
        }
    }
    // handleSubmit = e => {
    //     e.prevenntDefault();
    //     this.setState({ email:'', password:''})
    // }
    handleSubmit = async e => {
        e.prevenntDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
        this.setState({ email:'', password:''})
    };

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        // onChange={this.handleChange}
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        label='email'
                        required
                    />
                    {/* <label>Email</label> */}
                    <FormInput 
                        name='password' 
                        type='password'
                        // onChange={this.handleChange}
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label='password'
                        required/>
                    {/* <label>Password</label> */}
                    <div className='buttons'>
                        <CustomButton type='submit'>Login</CustomButton>
                        <CustomButton 
                            onClick={signInWithGoogle} 
                            isGoogleSignIn
                        >
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div> 
        )
    }
}

export default SignIn;