import { configureStore } from "@reduxjs/toolkit";

import signUpReducer from "./pages/signUp/signUpSlice";
import productsReducer  from "./pages/products/ProductsSlice";
import  cartReducer  from "./pages/cart/CartSlice";


const store = configureStore({

reducer:{
    signup:signUpReducer,
    product:productsReducer,
    cart:cartReducer,
}
})

export default store