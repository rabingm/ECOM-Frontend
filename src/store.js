import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist'";
// import storage from "redux-persist/lib/storage"


import signUpReducer from "./pages/signUp/signUpSlice";
import productsReducer from "./pages/products/ProductsSlice";
import cartReducer from "./pages/cart/CartSlice";
import categoryReducer from "./pages/category/CategorySlice";
import loginReducer from "./pages/login/loginSlice";
import orderReducer from "./pages/order/OrderSlice";

// const reducers = combineReducers({
//     key: cartReducer
// })

// const persistConfig = {
// 	key: "root",
// 	storage,
// blacklist: ['navigation'], // navigation will not be persisted
//  whitelist: ['navigation'], // only navigation will be persisted
// }; 

// const persistedReducer = persistReducer(persistConfig, reducers);



const store = configureStore({
    // reducer: persistedReducer,
    reducer: {
        signup: signUpReducer,
        category: categoryReducer,
        product: productsReducer,
        cart: cartReducer,
        login: loginReducer,
        order: orderReducer
    }
})

export default store