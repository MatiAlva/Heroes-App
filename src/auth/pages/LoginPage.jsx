import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context'

export const LoginPage = () => {

    const { login } = useContext(AuthContext)

    const naviate = useNavigate()


    const onLogin = () => {
        login('Matute')
        naviate('/', {
            replace: true
        })
    }

    return (
        <div className='container'>
            <h1>Login</h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={onLogin}
            >
                Login
            </button>
        </div>
    )
}
