import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles..scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = e => {
        e.prevenntDefault();
        this.setState({ email:'', password:''})
    }

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

                    <CustomButton type='submit'>Login</CustomButton>
                </form>
            </div> 
        )
    }
}

export default SignIn;