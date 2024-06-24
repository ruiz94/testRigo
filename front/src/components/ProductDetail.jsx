import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../slices/cartSlice';
import styles from './product.module.css'
import stylesDetail from './productDetail.module.css'
import { BsFillCartPlusFill } from "react-icons/bs";

import { FaStar } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector( state => state.products.values);
  const selectedProduct = products.find( item => item._id === id);
  const dispatch = useDispatch();

  if(!selectedProduct){
    return <div className="notFound">No product found</div>
  }
  
  const {name, image, brand, category, description, price, rating, numReviews } = selectedProduct;

  const addToCart = () => {
    dispatch(addProduct(selectedProduct))
  }

  return (
    <div className={stylesDetail.itemWrapper}>
      
      <div className={stylesDetail.image}>
      <img  src={`http://localhost:5000${image}`} alt={name} />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.title}>
          <span className={stylesDetail.name}>{name}</span>
          <span className={styles.price}>${price}</span>
        </div>
        <div className={styles.info}>
          <p><FaStar /> {rating} ({numReviews } Reviews) </p>
          <div>
            <p className={stylesDetail.bold}>Description</p>
            <span>{description}</span>
          </div>
          <p><span className={stylesDetail.bold}>Brand:</span> {brand}</p>
          <p><span className={stylesDetail.bold}>Category:</span> {category}</p>
          
        </div>
      </div>
      <button className={`${styles.btn} ${stylesDetail.btnAdd}`} onClick={addToCart} >
        <BsFillCartPlusFill /> Add item to cart
      </button>
    </div>
  )
}

export default ProductDetail

