import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState: {
        cart: [],
        amount:0,
        totalAmount: 0,
        totalPrice: 0,
    },
    reducers: {
        addToCart(state, action){
            try {
                const product = action.payload;
                console.log('product',product)
                const exist = state.cart && state.cart.find((item)=>
                    item.id === product.id &&
                    item.size === product.size &&
                    item.color === product.color  
                )
                if(exist){
                    exist.amount++
                    exist.totalAmount++
                    exist.totalPrice += product.price
                } else {
                    state.cart.push({
                        id: product.id,
                        price: product.price,
                        size: product.size,
                        amount:1,
                        totalPrice: product.price,
                        name: product.name,
                        img: product.img,
                        text: product.text,
                        color: product.color,
                    });
                    state.totalAmount++
                    state.totalPrice += product.price
                }
            } catch (error) {
                console.log(error)
            }
        },

        removeFromCart(state, action){
            const product = action.payload;
            try {
                const exist = state.cart && state.cart.find((item)=>
                    item.id === product.id &&
                    item.size === product.size &&
                    item.color === product.color  
                )
                if(exist.amount == 1){
                    state.cart = state.cart.filter((item)=> 
                    item.id !== product.id ||
                    item.size !== product.size ||
                    item.color !== product.color )
                    exist.totalAmount--
                    exist.totalPrice -= product.price
                } else {
                    exist.amount--
                    exist.totalPrice -= product.price
                    exist.totalAmount--
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer;