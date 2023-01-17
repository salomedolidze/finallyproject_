import React from 'react'
import {AppBar, Box, Toolbar} from "@mui/material"
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import SearchBar from './SearchBar'
import {UserIcon} from "./UserIcon"


const StyledAppBar = styled(AppBar)(()=>({
    background:"#fff",
    color:"#103B66",
    width:"88%",
    // width:"calc(100%-255px)",
    padding:"0 100px 0 30px",
    display:"flex"
}))

const StyledToolBar = styled(Toolbar)(()=>({
    display:"flex",
    width:"100%",
    justifyContent:"space-between"

}))

export const Header = () => {

  return (
    <Box>
        <StyledAppBar >
            <StyledToolBar>
            <Link to="/">home</Link>
            <SearchBar/>
            <UserIcon/>
            </StyledToolBar>
          
        </StyledAppBar>
    </Box>
  )
}

