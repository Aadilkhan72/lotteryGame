import React from 'react'
import useLotteryStore from '../../Store/lotteryStore'
import Box from './LotteryBox';
import LotteryBox from './LotteryBox';
import ResetModal from '../Reset/ResetModal';
import SnackBar from '../Snackbar/SnackBar.jsx';

function LotteryPage() {
  
    const {lotteryName,resetModal,snackbarMsg,snackbarOpen,setSnackbarOpen,snackbarType}=useLotteryStore();

     const handleClose=()=>{
        setSnackbarOpen(false);
    }

  return (
    <div>
        <h1 className='text-center mt-3'> <b>{lotteryName}</b> </h1>


        <LotteryBox name={"Card"} color={"linear-gradient(to top left, #E6F0FF 10%, #1E3A8A)"} path={"cardPage"}></LotteryBox>
        <LotteryBox name={"Jodi"} color={"linear-gradient(to top left, #E8FFF3 10%, #0F9D58)"}path={"jodiPage"}></LotteryBox>
        <LotteryBox name={"Patti"} color={"linear-gradient(to top left, #F3E8FF 10%, #6A0DAD)"} path={"pattiPage"}></LotteryBox>

         {resetModal && <ResetModal></ResetModal>}

         <SnackBar open={snackbarOpen} message={snackbarMsg}  onClose={handleClose} snackbarType={snackbarType}  ></SnackBar>
        </div>
  )
}

export default LotteryPage