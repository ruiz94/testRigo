import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { storeProducts } from './slices/productsSlice'
import Products from './components/Products'
import './App.css'

const App = () => {
  const products = useSelector((state) => state.products.values)
  const dispatch = useDispatch()

  useEffect(() => {
    const getApiResponse = () => {
      fetch('http://localhost:5000/api/products')
        .then((res) => res.json())
        .then((res) => {
          dispatch(storeProducts(res))
        })
    }
    getApiResponse()
  }, [])

  return (
    <div className='container' style={{ textAlign: 'center' }}>
      <Products products={products} />
    </div>
  )
}

export default App
