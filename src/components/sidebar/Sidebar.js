import { Drawer,List,Box, styled, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { UseCategories } from '../../redux'
import { SidebarHeader } from './SidebarHeader'


const StyledListItem=styled(ListItem)(()=>({
    padding:"5px 0px 3px 15px",
    margin:"0px"
}))


export const Sidebar = () => {
    const sideBarItems=UseCategories()

    
  return (
  <Drawer variant='permanent'
        sx={{
            display:{xs:"block"},
            "& .MuiDrawer-paper":{
                width:"255px",
                height:"100%"
            }
        }}
        open={true}>
<SidebarHeader/>

<List>{sideBarItems.map((sidebarItem)=>{
    const {_id,name}=sidebarItem;
     return <React.Fragment key={_id}>
        <Link to={""}/>
        <Box sx={{width:"flex"}}>
        <StyledListItem>
            <ListItemText primary={name}>
            </ListItemText></StyledListItem>
        </Box>

    </React.Fragment>
})}</List>
  </Drawer>
  )
}
