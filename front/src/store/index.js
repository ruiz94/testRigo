import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../slices/productsSlice'
import cartReducer from '../slices/cartSlice'
import listenerLocalStoreMiddleware from './localStorageMiddleware'
import { initialCartState } from '../slices/cartSlice'
import { initialProductState } from '../slices/productsSlice'

const preloadState = {
  cart: initialCartState,
  products: initialProductState
}

const reHydrateStore = () => {
  let localstore;
  if (localStorage.getItem('cart')) {
    localstore = JSON.parse(localStorage.getItem('cart'));
  }
  const store = {...preloadState,  cart: localstore}
  return store;
};

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().prepend(listenerLocalStoreMiddleware.middleware),
  preloadedState: reHydrateStore()
})

