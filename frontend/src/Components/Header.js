import React, { useState, useEffect } from 'react'
import axios from 'axios';
import UserHeader from './UserHeader';
import GuestHeader from './GuestHeader';

const Header = () => {
    const [userData, setUserData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
          const token = sessionStorage.getItem('token')
          if(token) {
            try {
              const userResponse = await axios.get("http://localhost:4000/userInfo", {
                headers: {
                  "x-access-token": token
                }
              });
              const udata = userResponse.data;
              setUserData(udata);
              sessionStorage.setItem('userInfo', JSON.stringify(udata));
    
            } catch(err) {
              throw err.message
            }
          }
        }
        fetchData();
      },[]);
      
  return (
    <div>
        {(userData.userName) ? <UserHeader name={userData.userName}/> : <GuestHeader />}
    </div>
  )
}

export default Header