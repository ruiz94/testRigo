import React from 'react'
import Product from './Product'

const Products = ({ products }) => {
  return (
    <div className='productsWrapper'>
      {
        products.map( item => (
          <Product key={item._id} className="item" {...item} />
        ))
      }
    </div>
  )
}

export default Products
