import React from 'react'
import Box from './Box'
import "./home.css";
import useLotteryStore from '../../Store/lotteryStore';
import ResetModal from '../Reset/ResetModal';
import SnackBar from '../Snackbar/SnackBar.jsx';

function Home() {
const {resetModal,snackbarMsg,snackbarOpen,setSnackbarOpen,snackbarType}=useLotteryStore();

 const handleClose=()=>{
        setSnackbarOpen(false);
    }
  //console.log(lotteryName);
  return (
    <div className='home'>
      <Box color='blue' name ="Good Morning Open" divColor="linear-gradient(to top left, #E6F0FF 10%, #1E3A8A)" ></Box>
      <Box color='blue' name ="Good Morning Close"  divColor="linear-gradient(to top left, #E6F0FF 10%, #1E3A8A)" ></Box>

      <Box color='blue' name ="Bombay Open"  divColor="linear-gradient(to top left, #FFEAEA 10%, #C1121F)"></Box>
      <Box color='blue' name ="Bombay Close"  divColor="linear-gradient(to top left, #FFEAEA 10%, #C1121F)" ></Box>

      <Box color='blue' name ="Golden Open"  divColor="linear-gradient(to top left, #FFF8E1 10%, #D4AF37)"></Box>
      <Box color='blue' name ="Golden Close"  divColor="linear-gradient(to top left, #FFF8E1 10%, #D4AF37)"></Box>

      <Box color='blue' name ="Kalyan Open"  divColor="linear-gradient(to top left, #E8FFF3 10%, #0F9D58)"></Box>
      <Box color='blue' name ="Kalyan Close"  divColor="linear-gradient(to top left, #E8FFF3 10%, #0F9D58)"></Box>

      <Box color='blue' name ="Gold Star Open"  divColor="linear-gradient(to top left, #F3E8FF 10%, #6A0DAD)"></Box>
      <Box color='blue' name ="Gold Star Close"  divColor="linear-gradient(to top left, #F3E8FF 10%, #6A0DAD)"></Box>

      <Box color='blue' name ="Golden Night Open"  divColor="linear-gradient(to top left, #E9F6FD 20%, #04277A)"></Box>
      <Box color='blue' name ="Golden Night Close"  divColor="linear-gradient(to top left, #E9F6FD 20%, #04277A)"></Box>

      <Box color='blue' name ="Kalyan Night Open"  divColor="linear-gradient(to top left, #E6FFFA 20%, #00796B)"></Box>
      <Box color='blue' name ="Kalyan Night Close"  divColor="linear-gradient(to top left, #E6FFFA 20%, #00796B)"></Box>

      {resetModal && <ResetModal></ResetModal>}

      <SnackBar open={snackbarOpen} message={snackbarMsg}  onClose={handleClose} snackbarType={snackbarType}  ></SnackBar>
    </div>
  )
}

export default Home