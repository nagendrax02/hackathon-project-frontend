import React from 'react'
import { LoginForm } from './LoginForm';

const Login = (closeUserLoginModal) => {
    return (
        <div>
            <LoginForm closeUserLoginModal={closeUserLoginModal} />
        </div>
    )
}

export { Login }
