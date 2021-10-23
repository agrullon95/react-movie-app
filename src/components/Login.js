import React from 'react';
import { signUp, signIn } from '../auth/firebase';

function Login() {
    const user = {
        email: 'agrullon95@gmail.com',
        password: '123456789'
    }

    const userSignUp = () => {
        signUp(user.email, user.password);
    }

    const userLogin = () => {
        signIn(user.email, user.password);
    }

    return (
        <>
        <button onClick={userSignUp}>Sign up</button>
        <button onClick={userLogin}>Login</button>
        </>
    )
}

export default Login;