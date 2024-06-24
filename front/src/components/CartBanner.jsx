import React from 'react'
import style from './cartBanner.module.css'
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartBanner = () => {
  const totalProducts = useSelector(state => state.cart.totalProducts);
  return (
    <Link className={style.bannerWrap} to='/cart'>
        <CiShoppingCart className={style.cartItem} />
        <span className={style.totalItems}>{totalProducts}</span>
    </Link>
  )
}

export default CartBanner
