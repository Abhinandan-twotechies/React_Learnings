import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload)
            console.log("Item added to cart:", action.payload);
            
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item !== action.payload);
            console.log("Item removed from cart:", action.payload);
        }
    }

});


export const {
    addToCart,
    removeFromCart
} = cartSlice.actions;


export default cartSlice.reducer;