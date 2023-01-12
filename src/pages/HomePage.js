import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { instance, isUserAdmin } from '../application'
import { setSelectedProduct, useUserInfo } from '../redux'
import {  useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const HomePage = () => {
  const [products,setProduct]=useState([])
  const userInfo=useUserInfo()
  const navigate=useNavigate()
  const dispatch=useDispatch()
  useEffect(()=>{
instance.get("products").then(({data})=>setProduct(data.products))
  },[])

 const onEdit=(product)=>{
  dispatch(setSelectedProduct({product}))
 navigate(`/products/edit/${product.name}`)
 }



  return (
    <div>{products.map((item)=>{
      return <div key={item._id}>
        <h1>{item.name}</h1>
        {isUserAdmin(userInfo) && <button onClick={()=>onEdit(item)}>edit</button>}
      </div>
    })}</div>
  )
}

