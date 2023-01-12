import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import { isUserAdmin, ProtectedRoute } from './application'
import { HomePage, LoginPage, RegisterPage,ProductFormPage } from './pages'
import { useUserInfo } from './redux'
// import ProductFormPage from './pages/ProductFormPage'
export const RoutesComponent = () => {
    const userInfo=useUserInfo()

    return (
        <>

        
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/login" element={<LoginPage/>} />
        <Route path="/products/new" element=
        { <ProtectedRoute hasAccess={isUserAdmin(userInfo)}>
 <ProductFormPage/>
        </ProtectedRoute>
       }/>
        <Route path ="/products/edit/:name"element=
        { <ProtectedRoute hasAccess={isUserAdmin(userInfo)}>
 <ProductFormPage/>
        </ProtectedRoute>
       }/>
        </Routes>
        </>
      
    )

}

