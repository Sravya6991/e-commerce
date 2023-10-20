import React, { useEffect, useState } from 'react'
import Header from '../Header';
import Products from '../Products/Products';
import Footer from './Footer';
import Category from './Category';
import '../../App.css';

const Home = () => {
  return (
    <>
      <Header />
      <Category />
      <Products />
      <Footer />
    </>
  )
}

export default Home