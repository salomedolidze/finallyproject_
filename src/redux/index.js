import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import { useSelector } from "react-redux";
import { productReducer } from "./slices/productSlice";
// import persistReducer from "redux-persist/es/persistReducer";

const persistConfig ={
    key:"root",
    storage,
    whitelist:["user"]
}

const rootReduces=combineReducers({
user:userReducer,
product:productReducer
})

const  persistedReducer=persistReducer(persistConfig,rootReduces)

export const store=configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false
    })
})
export const persistor=persistStore(store)


//action creator

export {authenticateUser,logoutUser} from "./slices/userSlice"
export {saveProduct,setSelectedProduct} from "./slices/productSlice"

//hhoks

export const useUserInfo =()=> useSelector((state)=>state.user.userData
)

export const useSelectedProduct=()=>useSelector((state)=>state.product.selectedProduct)
