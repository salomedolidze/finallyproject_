import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage } from './pages'

export const RoutesComponent = () => {
    return (
        <>

        
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/login" element={<LoginPage/>} />
        </Routes>
        </>
      
    )

}

