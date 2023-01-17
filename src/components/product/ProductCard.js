import { Grid ,Card, styled, Typography,Box} from '@mui/material'
import React from 'react'

const styledCardContent=styled(Box)(()=>({
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between"

}))
export const ProductCard = ({name,_id,image,price,category,brand,description}) => {
  return (
    <Grid item>
        <Card>
    <img src={image} alt={`${category} ${name}`} width="200px" height="200px"/>
       <styledCardContent>
        <Typography>{name}</Typography>
        <Typography>{price}</Typography>

        <Typography>{category}</Typography>
       </styledCardContent>
        </Card>
    </Grid>
  )
}
