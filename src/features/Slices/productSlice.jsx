import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productSlice = createSlice({
    name:'products',
    initialState : {
        filteredProducts: JSON.parse(sessionStorage.getItem('filteredData')) || storeData,
        singleProduct: JSON.parse(sessionStorage.getItem('singleProduct')) || storeData,
    },
    reducers: {
        filteredProducts(state, action) {
            try {
                const filter = storeData.filter((item)=> item.type === action.payload)
                console.log('filter',filter)
                state.filteredProducts = filter;
                const saveState = JSON.stringify(filter);
                sessionStorage.setItem('filteredData',saveState)
            } catch (error) {
                console.log(error)
            }
        },

        singleProduct(state, action) {
            try {
                const selectedProduct = storeData.filter((item)=> item.id === action.payload)
                console.log('selectedProduct',selectedProduct)
                state.singleProduct = selectedProduct;
                const saveState = JSON.stringify(selectedProduct);
                sessionStorage.setItem('singleProduct',saveState)
            } catch (error) {
                console.log(error)
            }
        },
    }
});

export const {filteredProducts, singleProduct} = productSlice.actions;
export default productSlice.reducer;