import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header';
import Footer from '../Home/Footer'
import AllProducts from '../Products/AllProducts'
import axios from 'axios'
import Category from '../Home/Category'

const url = 'http://localhost:4000/products/category/'

const SingleCategory = () => {
    const [categoryProduct, setCategoryProduct] = useState([]);
    const category_name = useParams().id;
   
    useEffect(()=>{
        axios.get(`${url}${category_name}`)
            .then(response => setCategoryProduct(response.data))
    },[category_name]);

  return (
    <>
        <Header />
        <Category />
        <h3 className='text-center my-3' style={{textTransform: 'uppercase'}}>
            {category_name}
        </h3>
        <div className='container'>
            <AllProducts products={categoryProduct}/>                 
        </div>
        <Footer />
    </>
  )
}

export default SingleCategory