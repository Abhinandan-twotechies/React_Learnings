import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    cats: [],
    isLoading: false,

};

export const cartSlice = createSlice({
    name: "cats",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload)
            console.log("Item added to cart:", action.payload);

        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item !== action.payload);
            console.log("Item removed from cart:", action.payload);
        },
        getCatsFetch: (state) => {
            state.isLoading = true;
        },
        getCatsSuccess: (state, action) => {
            state.cats = action.payload;
            state.isLoading = false;
        },
        getCatFaliure: (state) => {
            state.isLoading = false;
        }
    }

});


export const {
    addToCart,
    removeFromCart,
    getCatsFetch,
    getCatsSuccess,
    getCatFaliure
} = cartSlice.actions;


export default cartSlice.reducer;