import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../utils/Status";

const initialState = {
    products: [],
    productsStatus: STATUS. IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE
     }
     export const getSearchProducts = createAsyncThunk('searchProducts', async(keyword) =>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
    })
   const searchSlice = createSlice({
        name: "search",
         initialState, 
        reducers: {},
     extraReducers: (builder) => {
      builder
        .addCase(getProducts.pending, (state, action) => {
        state.productsStatus=STATUS. LOADING
       })
       
                
        }
})
export default searchSlice.reducer