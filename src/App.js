import './App.css';
import { Header } from './components/header';
import {RoutesComponent} from "./Routes"
import { Box} from "@mui/material"
function App() {
  return (
    <Box >
      <Header/>
      <Box>
      <RoutesComponent/>
      </Box>
    </Box>
  );
}

export default App;
