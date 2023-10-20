import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Home/Footer';
import axios from 'axios'
import '../../App.css';

const url = "http://localhost:4000/login"

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: '',
        message: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(url, {
            email: user.email,
            password: user.password
        })
        .then(res => {
            console.log(res.data)
            if(res.data.auth === true) {
                sessionStorage.setItem('token', res.data.token);
                navigate('/');
            } else {
                setUser({
                    ...user,
                    message: res.data.token
                })
            }
        });
    }

  return (
    <>
        <Header />
        
        <div className='container my-3'>
            <h2 className='text-center my-2'>Login</h2>
            {user.message ? <p className='text-danger fw-bold'>{user.message}</p> : null}
           
            <form className='form border border-3 mx-auto' onSubmit={handleSubmit}>
                <div className='form-groupmb-3'>
                    <label className='form-label' htmlFor='email'>Email: </label>
                    <input type='text' className='form-control' name='email' value={user.email} onChange={handleChange}/>
                </div>
                <div className='form-group mb-3'>
                    <label className='form-label' htmlFor='password'>Password: </label>
                    <input type='password' className='form-control' name='password' value={user.password} onChange={handleChange}/>
                </div>
                <div className='text-center my-1'>
                    <button type='submit' className='btn btn-primary px-4'>Login</button>
                </div>
            </form>
            <p className='mt-3 text-center'>
                Are you new user? Then go <Link to='/signup'>register</Link>
            </p>
        </div>

        <Footer />
    </>
   
  )
}

export default Login