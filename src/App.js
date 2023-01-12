import './App.css';
import { Header } from './components/header';
import {RoutesComponent} from "./Routes"
import { Box} from "@mui/material"
import styled from '@emotion/styled';
// import { margin } from '@mui/system';

const StyledContentContainer=styled(Box)(()=>({
marginTop:"100px"
}))
function App() {
  return (
    <Box >
      <Header/>
      <StyledContentContainer>
      <RoutesComponent/>
      </StyledContentContainer>
    </Box>
  );
}

export default App;
