import { configureStore } from "@reduxjs/toolkit";

import signUpReducer from "./pages/signUp/signUpSlice";


const store = configureStore({

reducer:{
    signup:signUpReducer
}
})

export default store