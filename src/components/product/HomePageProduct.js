import { Grid } from '@mui/material'
import React from 'react'
import { useHomePageProducts } from '../../redux'
import { ProductCard } from './ProductCard'

export const HomePageProduct = () => {
    const homePageProducts=useHomePageProducts()
  return (
    <Grid container spacing={2} sx={{width:"100%"}}>
        {homePageProducts.map((products)=>{
      return  <ProductCard key={products._id}{...products}/>
    })}
    </Grid>
  )
}
