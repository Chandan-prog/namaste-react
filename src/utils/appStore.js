import { configureStore, createReducer } from "@reduxjs/toolkit";
// import cartSlice from "./cartSlice";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice"

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer
    }
});

export default appStore;