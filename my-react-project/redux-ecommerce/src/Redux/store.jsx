import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
import productReducer from "./ProductSlice";

// reducer and reducers
// cartReducer = cartSlice.reducer
const store = configureStore ({
    reducer: {
        cart: cartReducer,
        product:productReducer,
    }
})
    
export default store; 