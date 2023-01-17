import './App.css';
import { Header } from './components/header';
import {RoutesComponent} from "./Routes"
import { styled,Box} from "@mui/material"
// import  from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchHomePageProducts } from './redux';
import { Sidebar } from "./components/sidebar/Sidebar"
// import { margin } from '@mui/system';

const StyledContentContainer=styled(Box)(()=>({
padding:"20px",
marginLeft:"255px",
marginTop:"70px",
minHeight:"100vh",


}))
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
 dispatch(fetchHomePageProducts())   
  },[])
  return (
    <Box >
   <Sidebar/>
      <Header/>
      <StyledContentContainer>
      <RoutesComponent/>
      </StyledContentContainer>
    </Box>
  );
}

export default App;
