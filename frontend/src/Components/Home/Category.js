import React from 'react'
import { Link } from 'react-router-dom';

const Category = () => {
    const categories = ["electronics","jewelery","men's clothing","women's clothing"];
   
  return (
    <div className='container category my-5 border border-secondary'>
        <h3 className='mb-3'>Category</h3>
        <div className='category-list'>
        {categories && categories.map(item => (
            <div key={item.id}>
                <Link to={`/products/category/${item}`} style={{textDecoration: 'none'}}>
                    <p className='label border border-secondary rounded-pill'>
                        {item}
                    </p>
                </Link>
            </div>
            
        ))}
        </div>
        
    </div>
  )
}

export default Category