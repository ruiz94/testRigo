import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addProduct, removeProduct, checkout } from "../slices/cartSlice";

const listenerLocalStoreMiddleware = createListenerMiddleware()

listenerLocalStoreMiddleware.startListening({
  matcher: isAnyOf(addProduct, removeProduct, checkout),
  effect: async (action, listener) => {
    const { cart } = listener.getState()
    localStorage.setItem('cart',JSON.stringify(cart) );
  }
});

export default listenerLocalStoreMiddleware