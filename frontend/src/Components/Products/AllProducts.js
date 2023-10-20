import React from "react";
import { Link } from 'react-router-dom';


const AllProducts = (props) => {
  const {products} = props;
  
  return (
    <div className="row justify-content-center">
      {products.map(item => (
        <div className="col-12 col-md-5 col-lg-3 col-xl-2  p-3 mb-3 me-2 product" key={item.id}>
          <Link to={`/products/${item.id}`} className="card" style={{textDecoration: 'none'}}>
            <img src={item.image} className="card-img-top card-image" alt="some" />
            <div className="card-body">
              <p className="card-text">{item.title.slice(0, 30)} ...</p>
              <p className="price fw-bold">$ {item.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
