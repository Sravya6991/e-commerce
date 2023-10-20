import React, { useEffect, useState } from 'react'

const CartList = () => {
    const [cartData, setCartData] = useState("");
    const [total, setTotal] = useState("");

    useEffect(() => {
        const data = sessionStorage.getItem('menuOrder');
        const total = sessionStorage.getItem('totalPrice');
        setCartData(JSON.parse(data));
        setTotal(total);
    },[])

  return (
    <div className="container">
            {cartData && cartData.map(item => (
                    <div className="row border border-3 mb-3" key={item.title}>
                        <div className="col-12 col-md-4 border border-2">
                            <img src={item.image} style={{width: '10em', height: '8em'}} alt={item.title}/>
                        </div>
                        <div className="col-12 col-md-8 text-left p-4">
                            <h4>{item.title}</h4>
                            <p className='fw-bold'>Price: <span>$ {item.price}</span></p>
                            <p className='fw-bold'>Quantity: <span>{item.quantity}</span></p>
                        </div>
                    </div>
            ))}
             <div className='row border border-3'>
                <h4>Total Price: {total}</h4>
            </div>
    </div>
  )
}

export default CartList