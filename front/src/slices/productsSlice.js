import { createSlice } from "@reduxjs/toolkit";

export const initialProductState =  {
  values: []
}

export const productSlice = createSlice({
  name: 'products',
  initialState: initialProductState,
  reducers: {
    storeProducts: (state, action) => {
      state.values = action.payload
    }
  }
})

export const { storeProducts } = productSlice.actions;

export default productSlice.reducer;