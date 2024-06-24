import { createSlice, current } from "@reduxjs/toolkit";

export const initialCartState = {
  totalProducts: 0,
  totalPrice: 0,
  products: []
}
const calcTotals = ( products ) => {
  return products.reduce( (acc, item) => {
    return {
      totalProducts: acc.totalProducts + item.amount,
      totalPrice: Number((acc.totalPrice + item.total).toFixed(2))
    }
  }, { totalProducts: 0,
    totalPrice: 0 })
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addProduct: (state, action) => {
      const products  = state.products;
      const productFound = products.find( item => item._id === action.payload._id);

      if(!productFound){
        state.products = [...products, {...action.payload, total: action.payload.price, amount: 1}]
      }else {
        state.products.map( item => {
          if(item._id === action.payload._id){
            const amount = item.amount + 1;
            item.total = Number((item.price * amount).toFixed(2));
            item.amount = amount
          }
          return item
        })
      }

      const totals = calcTotals(state.products)

      state.totalPrice = totals.totalPrice;
      state.totalProducts = totals.totalProducts
    },
    removeProduct: (state, action) => {

      const newProducts = state.products.map( item => {
        if(item._id === action.payload && item.amount === 1) return null
        
        if(item._id === action.payload) { 
          const amount = item.amount - 1;
          item.total = Number((item.price * amount).toFixed(2));
          item.amount = amount
        }

        return item
      })

      state.products = newProducts.filter(item => item)

      const totals = calcTotals(state.products)

      state.totalPrice = totals.totalPrice;
      state.totalProducts = totals.totalProducts
    },
    checkout: (state, action) => {
      state.products = [];
      state.totalPrice = 0;
      state.totalProducts = 0
    }
  }
})

export const { addProduct, removeProduct, checkout } = cartSlice.actions;

export default cartSlice.reducer;