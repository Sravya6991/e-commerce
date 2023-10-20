import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Header from '../Header';
import ProductDescription from './ProductDescription'
import Footer from '../Home/Footer'
import'../../App.css'

const url = "http://localhost:4000/products/";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);

  const product_id = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${url}${product_id}`)
      .then(response => {
        setProduct(response.data)
      })
  },[product_id]);

  const goback = () => {
    navigate(-1);
  }

  return (
    <>
      <Header />
      <ProductDescription product={product} goback={goback}/>
      <Footer />
    </>
  )
}

export default SingleProduct