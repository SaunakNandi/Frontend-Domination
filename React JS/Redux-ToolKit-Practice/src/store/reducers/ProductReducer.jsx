import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    products: [],
}

export const ProductSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        getProducts:(state,action)=>{
            console.log(state)
            console.log(action)
            state.products=action.payload
        }
    }
})

export default ProductSlice.reducer
export const {getProducts}=ProductSlice.actions