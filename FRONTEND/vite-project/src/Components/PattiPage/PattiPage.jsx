import React,{useEffect, useState} from 'react'
import useLotteryStore from '../../Store/lotteryStore'
import PattiModal from './PattiModal';
import { useNavigate } from "react-router-dom";
import SnackBar from '../Snackbar/SnackBar.jsx';
import axios from 'axios';
import ResetModal from '../Reset/ResetModal.jsx';

function PattiPage() {
    const {resetModal,lotteryName,pattiModal,setPattiModal,setAmtMulti,snackbarOpen,snackbarMsg,setSnackbarOpen,snackbarType}=useLotteryStore();


      const handleClose=()=>{
        setSnackbarOpen(false);
    }

    const [data,setData]=useState(null);
     const [isDisabled, setIsDisabled] = useState(false);


       useEffect(()=>{
    
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/getPatti/${lotteryName}`,{withCredentials:true})
            .then((res)=>
                { 
                    setData(res.data);
                    // console.log(res.data);
                })
            .catch((e)=>{
               // console.log(e);
                setData(null);
            })
        },[]);
       
      
  return (
    <>
         <div> <h1 className='text-center' ><b> {lotteryName}</b></h1>
          <h1 className='text-center mt-2' ><b>PATTI </b></h1>
         
       <table className="cardTable mt-2">
  <thead>
    <tr>
      <th>Patti</th>
      <th>Amount</th>
    </tr>
  </thead>

  <tbody>
    {data === null || data.length === 0 ? (
      <tr>
        <td colSpan="2" style={{ textAlign: "center" }}>
          No data to show
        </td>
      </tr>
    ) : (
      data.map((el) => (
        <tr key={el.number}>
          <td>{el.number}</td>
          <td>₹{el.amount}</td>
        </tr>
      ))
    )}
  </tbody>
</table>
         
      </div>
    <div className='footer'>
        <button className=' btn btn-danger' onClick={()=>{setPattiModal(true);setAmtMulti(-1) }} disabled={isDisabled}>घटाए</button>
        <button className='btn btn-success' onClick={()=>setPattiModal(true)} disabled={isDisabled}>बढ़ाये</button>
         </div>

         {resetModal &&
         <ResetModal></ResetModal>
         }
         
         {pattiModal&& <PattiModal  disableParent={() => setIsDisabled(true)} ></PattiModal>}

     <SnackBar open={snackbarOpen} message={snackbarMsg}  onClose={handleClose} snackbarType={snackbarType}  ></SnackBar>
    </>
   
  )
}

export default PattiPage