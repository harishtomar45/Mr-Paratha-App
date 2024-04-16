import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./auth/authSlice"
import  parathaReducer from "./paratha/parathaSlice"
import cartReducer from "./cart/cartSlice"

const store = configureStore({
      reducer : {
        auth : authReducer,
        parathas : parathaReducer,
        cart : cartReducer,
      },
})

export default store ; 