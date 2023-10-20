import React, { useState } from 'react'
import Header from '../Header';
import Footer from '../Home/Footer'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const burl = "http://localhost:4000/booking"

const Booking = () => {
    const totalPrice = parseFloat(sessionStorage.getItem("totalPrice"));
    const navigate = useNavigate();
    const [booking, setBooking] = useState({
        bankname: 'HDFC bank',
        acctnumber: '4242 4242 4242 4242 4242',
        expiry: '12/25',
        cvv: '456',
        username: 'Testing 1',
        totalPrice: totalPrice
    });

    const handleChange = (e) => {
        setBooking({
            ...booking,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        axios.post(burl, {
            orderId: Math.ceil(Math.random(1,10)*1000),
            orderDate: new Date().toLocaleString(),
            bookingData: booking 
        }).then(result =>{
            console.log(result.data);
            sessionStorage.setItem("bookingOrder", JSON.stringify(result.data));
            navigate("/orders", {state: {booking: result.data}})
        }
        );
    }

  return (
    <>
        <Header />
        <h3 className='text-center my-3'>Book your Order</h3>
        <div  className='container'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-group mb-3'>
                    <label className='form-label fw-bold' htmlFor='bankname'>Bank name</label>
                    <input 
                        className='form-control'
                        placeholder='Bank Name'
                        value={booking.bankname}
                        onChange={handleChange}
                        name='bankname'
                    /> 
                </div>
                <div className='form-group mb-3'>
                    <input 
                        className='form-control' 
                        placeholder='4242 4242 4242 4242 4242'
                        value={booking.acctnumber}
                        onChange={handleChange}
                        name='acctnumber'
                    />
                </div>
                <div  className='d-flex'>
                    <div className='form-group mb-3'>
                        <label className='form-label fw-bold' htmlFor='expiry'>Expiry date</label>
                        <input 
                            className='form-control'
                            placeholder='12/25'
                            value={booking.expiry}
                            onChange={handleChange}
                            name='expiry'
                        /> 
                    </div>
                    <div className='form-group mb-3'>
                        <label className='form-label fw-bold' htmlFor='cvv'>CVV</label>
                        <input 
                            className='form-control'
                            placeholder='456'
                            value={booking.cvv}
                            onChange={handleChange}
                            name='cvv'
                        /> 
                    </div>
                </div>
                <div className='form-group mb-3'>
                    <label className='form-label fw-bold' htmlFor='username'>User name</label>
                    <input 
                        className='form-control'
                        placeholder='User Name'
                        value={booking.username}
                        onChange={handleChange}
                        name='username'
                    /> 
                </div>
                <div>
                    <h5 className='fw-bold'>TotalPrice: $ {totalPrice}</h5>
                </div>
                <button type='submit' className='btn btn-success my-1 mx-auto'>Pay Now</button>
            </form>
        </div>
        <Footer />
    </>

  )
}

export default Booking