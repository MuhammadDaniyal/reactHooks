import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const toastNotify = () =>{
        toast.success('Login Successful', {
            position: "top-center"
        })
    }
    return (
        <>
            <div className='container'>
                <h2>Welcome to signin page</h2>
                <button className='btn btn-primary'
                    onClick={toastNotify}>Log In</button>
            </div>

            <ToastContainer 
                theme="dark"
            />
        </>
    )
}

export default Login