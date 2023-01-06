import { Avatar, IconButton, Menu, MenuItem } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import {Button} from "@mui/material"
import { useNavigate } from 'react-router-dom'

export const UserIcon = () => {
    const [anchor,setAnchor]=useState(null);
    const handleClose = ()=>{
        setAnchor(null)
    };
    const navigate=useNavigate()
  return (
    <Box>
        <IconButton onClick={(e)=>{
            console.log("e",e)
            setAnchor(e.currentTarget)
        }}>
            <Avatar></Avatar>
        </IconButton>
        <Box>
            <Menu anchorEl={anchor} 
            anchorOrigin={{
                vertical:"bottom",
                horizontal:"right",
            }}
            keepMounted
            transFormorigin={{
                vertical:"top",
                horizontal:"left"
            }}
            open={Boolean(anchor)}
            onClose={handleClose}
            
            
            >
                <MenuItem>
                <Button onClick={()=>{
                    navigate("/register")
                }}>register</Button>
                <Button>profile</Button>

                </MenuItem>

            </Menu>
        </Box>
    </Box>
  )
}

