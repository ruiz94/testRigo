import React from 'react'
import { Link } from 'react-router-dom';
import styles from './product.module.css'
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addProduct } from '../slices/cartSlice';

const Product = (props) => {
  const { _id, name, image, brand, price, countInStock, rating, numReviews } = props;
  const dispatch = useDispatch()

  const addProductToCart = () => {
    if(countInStock === 0) return;
    dispatch(addProduct(props))
  }

  return (
    <div className={styles.itemWrapper}>
      <Link className={styles.linkWrapper} to={`product/${_id}`}>
        <img className={styles.img} src={`http://localhost:5000${image}`} alt={name} />
        <div className={styles.title}>
          <span className={styles.name}>{name}</span>
          <span className={styles.price}>${price}</span>
        </div>
        <div className={styles.info}>
        <p><FaStar /> {rating} ({numReviews } Reviews) </p>
          <p>Brand: {brand}</p>
        </div>
      </Link>
      <button
        className={`${countInStock === 0 ? styles.btnDisabled : ''} ${styles.btn}`}
        disabled={countInStock === 0} onClick={addProductToCart} >  <BsFillCartPlusFill />  Add item to cart </button>
    </div>
  )
}

export default Product
