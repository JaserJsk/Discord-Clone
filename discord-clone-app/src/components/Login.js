import './Login.css';

import React from 'react';
import Logo from '../assets/logo.svg';
import { auth, provider } from '../config/firebase';
import { Button } from '@material-ui/core'

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(
            error => alert(error.message)
        );
    };

    return (
        <div className="login">
            <div className="login-logo">
                <img src={Logo} alt="Discord Clone" />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;