import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Home/Footer';
import axios from 'axios'

const url = "http://localhost:4000/signup"

const Signup = () => {
    const [user, setUser] = useState({
        userName: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        message: ''
    });

    const [msg, setMsg] = useState("");

    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(url, {
            userName: user.userName,
            email: user.email,
            password: user.password,
            phone: user.phone,
            address: user.address
        })
        .then(res => {
            console.log(res.data)
            if(res.data.token) {
                setMsg(res.data.token);
            } else {
                navigate("/login");
            }
        });
    }

  return (
    <>
        <Header />

        <div className='container my-3'>
            <h2 className='text-center my-2'>Signup</h2>
            {msg ? <p className='text-danger fw-bold'>{msg}</p> : null}
            
            <form className='form border border-3 mx-auto' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className='form-label' htmlFor='userName'>Name: </label>
                    <input type='text' className='form-control' name='userName' value={user.userName} onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor='email'>Email: </label>
                    <input type='text' className='form-control' name='email' value={user.email} onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor='password'>Set Password: </label>
                    <input type='password' className='form-control' name='password' value={user.password} onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor='phone'>Phone: </label>
                    <input type='text' className='form-control' name='phone' value={user.phone} onChange={handleChange}/>
                </div>
                <div className='form-group mb-2'>
                    <label className='form-label' htmlFor='address'>Address: </label>
                    <textarea className='form-control' name='address' onChange={handleChange} value={user.address} rows={2} cols={3}></textarea>
                </div>
                <div className='text-center my-1'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>     
        </div>
        <Footer />
    </>
    
  )
}

export default Signup