import React from 'react'
import styles from './layout.module.css'
import CartBanner from './CartBanner'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Outlet, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  return (
    <>
      {
        location.pathname !== '/' &&  
          <Link className={styles.btnBack} to='/'>
            <FaArrowLeftLong />
          </Link>
      }
      <CartBanner/>
      <Outlet />
    </>
  )
}

export default Layout
