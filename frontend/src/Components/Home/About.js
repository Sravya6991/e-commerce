import React from 'react'
import Header from '../Header';
import Footer from './Footer';
import Category from './Category';
import '../../App.css';


const About = () => {
  return (
    <>
      <Header />
      <Category />
      <div className='container'>
        <h3>My Shoppie</h3>
        <h5>Shop for variety of products and win exclusiv discounts for each buy</h5>

        <p>
            <b>Shoppie</b> is one of India's largest departmental stores and finest retailers for more than 6 years. 
            It offers one of the country's widest ranges in the latest apparel, electronics and luxury jewelleries at the best prices. 
            Today Shoppie is an easy way to shop for all your fashion and lifestyle needs online from the comfort of your home. 
           
        </p>
        <p>
            Log in to bag the best deals, get exclusive offers and enjoy the 'Shop Anytime Anywhere' with free shipping, cash on delivery and 
            the great customer service that Shoppie is known for.
            <b>Shoppie</b> is a one stop destination for your family's fashion needs be it men's clothing, women's clothing, electronics and jewellery to name a few of the top categories to check out. 
        </p>
      </div>
      <Footer />
    </>
  )
}

export default About