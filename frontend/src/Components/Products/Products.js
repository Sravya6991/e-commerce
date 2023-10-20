import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AllProducts from './AllProducts';

const url = "http://localhost:4000/products";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        axios.get(url)
            .then(response => setProducts(response.data))
    },[]);

    
    return (
        <div className='container'>
            <AllProducts products={products}/>
        </div>
    )
}

export default Products