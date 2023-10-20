import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Home/Footer';
import axios from 'axios';
import OrderList from './OrderList';
import { useLocation } from 'react-router-dom';

const url = "http://localhost:4000/order";

const Orders = () => {
    const [user, setUser] = useState([]);

    const userData = JSON.parse(sessionStorage.getItem('userInfo'));
    const emailId = userData ? userData.email : null;

    const bookingOrder = JSON.parse(sessionStorage.getItem("bookingOrder"));

    const location = useLocation();
    const booking = location.state ? location.state.booking : bookingOrder;
    console.log(booking)

    useEffect(() => {
        axios.get(`${url}?email=${emailId}`)
            .then(res => {
                setUser([res.data]);
            });
    },[booking]);

  return (
    <>
        <Header />
        <div className='container'>
            <h4 className='text-center text-success fw-bold my-3'>Order is Confirmed!</h4>
            <div className='overflow-x-auto'>
                {user ?
                    <table className='table table-bordered'>
                        <thead>
                            <tr className='text-center table-info'>
                                <th>OrderId</th>
                                <th>Username</th>
                                <th>Booking date</th>
                                <th>Products</th>
                                <th>Total Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <OrderList user={user} booking={booking}/>
                        </tbody>
                    </table>
                : 
                    <p>Login to view your orders !</p>
                }
            </div>
        </div>
        <Footer />    
    </>

  )
}

export default Orders