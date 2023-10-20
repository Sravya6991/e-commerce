import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import axios from "axios";

// const url = "http://localhost:4000/cart";

const ProductDescription = ({product, goback}) => {
  const [count, setCount] = useState(1);
  const user = JSON.parse(sessionStorage.getItem('userInfo'));

  let orderid = [];
  let quantity = [];

  const navigate = useNavigate();

  const addItem = () => {
    setCount(count+1);
  }

  const removeItem = () =>  {
    if(count>0) {
      setCount(count-1)
    } else {
      setCount(0)
    }
  }

  const addCart = () => {    
    const oid = sessionStorage.getItem('oid');
    const qty = sessionStorage.getItem('qty');
  
    if(oid && qty) {
      const ids = oid.split(',');
      const qtys = qty.split(',');
      
      ids.map(item => (
        orderid.push(parseInt(item))
      ));

      qtys.map(item => (
        quantity.push(parseInt(item))
      ))

    }
    orderid.push(product.id);
    quantity.push(count);
   
    sessionStorage.setItem('oid', orderid);
    sessionStorage.setItem('qty', quantity);

    // user info
    if(!user) {
      navigate('/login');
    }
  } 

  const goCart = () => {
    const cartInfo = {"order_id": orderid, "quant": quantity}
    navigate({pathname: '/cart'}, {state: cartInfo});
  }


  return (

    <div className='container my-3'>
        <div className='row'>
          <div className='col-12 col-lg-4 me-lg-3'>
            <img src={product.image} className='product-image' alt='someth'/>
          </div>
          <div className='col-12 col-lg-7 product-descript'>
            <h4 className='mb-2'>{product.title}</h4> 
            <p className='label product-category'>{product.category}</p>

            <h5 className='mb-3 fs-6 fs-lg-5'>DESCRIPTION: 
              <span className='ms-3 fw-normal fs-6'>
                 {product.description}
              </span>
            </h5>
            <div className='d-flex mb-3 rating'>
              <h6 className='text-success'>Rating: <span>{product.rating && product.rating.rate}</span></h6>
              <h6 className='text-success'>People bought: <span>{product.rating && product.rating.count}</span></h6> 
            </div>

            <p className='fw-bold mb-3 text-primary'>PRICE: <span>$ {product.price}</span></p>

            <div className='mb-4'>
              <button className='btn btn-success' onClick={()=>addItem(product.id)}>+</button>
              <button className='btn btn-teritary'>{count}</button>
              <button className='btn btn-danger' onClick={()=>removeItem(product.id)}>-</button>
            </div>

            <button type='button' className='btn btn-primary me-3' onClick={addCart}>
              Add to cart
            </button>
            <button type='button' className='btn btn-primary me-3' onClick={goCart}>
              Go to cart
            </button>
            <button className='btn btn-danger' onClick={goback}>Back</button>
          </div>
        </div>
    </div>
  )
}

export default ProductDescription