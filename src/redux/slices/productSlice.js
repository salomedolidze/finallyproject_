import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { instance } from "../../application"



export const saveProduct = createAsyncThunk(
    "product/saveProduct",
    async({product,isUpdating})=>{
        const endpoint= isUpdating ?`/products/${product.id}`:"/products"
        const method=isUpdating ?"put":"post"
        const {data}=await instance[method](endpoint,{product})
        return data
    }
)


const productSlice=createSlice({
    name:"product",
    initialState:{
        loading:false,
        error:null,
        selectedProduct:null
    },
    reducers:{
        setSelectedProduct:(state,action)=>{
            state.selectedProduct=action.payload.product
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(saveProduct.pending, (state)=>{
            state.loading=true
        });
        builder.addCase(saveProduct.fulfilled, (state)=>{
            state.loading=false
        });
        builder.addCase(saveProduct.rejected, (state)=>{
            state.loading=false
            state.error="something went wrong"
        })
    }
})
export const {setSelectedProduct}=productSlice.actions
export const productReducer=productSlice.reducer