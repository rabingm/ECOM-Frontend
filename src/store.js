import { configureStore } from "@reduxjs/toolkit";

import signUpReducer from "./pages/signUp/signUpSlice";
import productsReducer  from "./pages/products/ProductsSlice";
import  cartReducer  from "./pages/cart/CartSlice";
import categoryReducer from "./pages/category/CategorySlice";
import loginReducer from "./pages/login/loginSlice";
import orderReducer from "./pages/order/OrderSlice";


const store = configureStore({

reducer:{
    signup:signUpReducer,
    category:categoryReducer,
    product:productsReducer,
    cart:cartReducer,
    login:loginReducer,
    order:orderReducer
}
})

export default store