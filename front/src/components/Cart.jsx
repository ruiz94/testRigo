import React from 'react'
import styles from './cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { addProduct, removeProduct, checkout } from '../slices/cartSlice';
import { useNavigate } from "react-router-dom";
import EmptyProducts from './EmptyProducts';


const CartProduct = ({item}) => {
  const dispatch = useDispatch();
  const { image, name, total, price, amount } = item;

  const addProductToCart = () => dispatch(addProduct(item));
  const removeProductFromCart = () => dispatch(removeProduct(item._id));
  

  return <div className={styles.productWrapper}>
    <div className={styles.imageWrapper}>
      <img width={80} src={`http://localhost:5000${image}`} alt="" />
    </div>
    <div className={styles.productInfo}>
      <div className={styles.name}>{ name }</div>
      <div >${ price } | <span className={styles.price}>${ total }</span></div>
    </div>
    <div className={styles.ctaContainer}>
      <IoIosRemoveCircleOutline onClick={removeProductFromCart} className={styles.ctaIcon} />
      <span className={styles.amount}>{amount}</span>
      <IoIosAddCircle onClick={addProductToCart} className={styles.ctaIcon} />
    </div>
  </div>
}

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, totalPrice, totalProducts } = useSelector( ({ cart }) => cart)
  const onCheckout = () => {
    dispatch(checkout())
    navigate('/')
  };
  

  return (
    <div className={styles.wrapperShoppingCart}>
      <h2>Shopping Cart</h2>
      <div className="products">
        {
          products.map( item => 
            <CartProduct key={item._id} item={item} />
          )
        }
        {
          products.length === 0 && <EmptyProducts/>
        }
      </div>
      <div className={styles.ctaInfoWrapper}>
        <div className={styles.totals}>
          <p>
            <span> Total Products: </span>
            <span className={styles.strong}>{ totalProducts }</span>
          </p>
          <p>
            <span>Total: </span>
            <span className={styles.strong}>${ totalPrice }</span>
          </p>
        </div>
        <button onClick={onCheckout} className={styles.btnCheckout}>Check Out</button>
      </div>
    </div>
  )
}

export default Cart
