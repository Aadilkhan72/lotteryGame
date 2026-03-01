import React, { useState } from 'react'
import useLotteryStore from '../../Store/lotteryStore';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function CardModal({ disableParent }) {

    const {lotteryName,cardNumber,setCardNumber,amount,amtMulti,setAmount,setCardModal, setSnackbarMsg,setSnackbarOpen,setSnackbartype}=useLotteryStore();
     
    const navigate=useNavigate();

   

    const onClose=()=>{
        setCardModal(false);
    }
    const handleSubmit=()=>{
       disableParent();

         onClose();
         const finalAmt=amount*amtMulti;

          if(lotteryName===""){
            alert("Select lottery first");
            return ;
         }
         if(cardNumber==""){
           alert("Enter card number");
            return ;
         }
          
       

         axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/update-card`,{lotteryName,cardNumber,finalAmt},{withCredentials:true})
         .then((res)=>{
            setSnackbarOpen(true);
            setSnackbarMsg(res.data.message);
            setSnackbartype("success");
            setTimeout(()=>{
             window.location.reload();
            },1000);
            setAmount(0);
            setCardNumber(0);
        
         })
         
         .catch(e=>{
               //console.log(e);
              setSnackbarOpen(true);
           const errorMessage =
    e.response?.data?.message || e.message || "Something went wrong";
            setSnackbarMsg(errorMessage);
            setSnackbartype("error");
            setTimeout(()=>{
                window.location.reload();
            },2000);
            setAmount(0);
            setCardNumber(0);
         })
        
         

       
    }
 return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 999
        }}
        onClick={onClose}
      />

      {/* Modal Box */}
      <div
        className="p-4"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          borderRadius: "1rem",
          width: "90%",
          maxWidth: "400px",
          zIndex: 1000
        }}
        onClick={(e) => e.stopPropagation()}  // 👈 prevent closing when clicking inside
      >
        <h5 className="mb-3 text-center">Enter Card Details</h5>

        {/* Card Field */}
        <div className="mb-3">
          <label className="form-label">Card</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter card number"
            maxLength={1}
            value={cardNumber===0?"":cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        {/* Amount Field */}
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter amount"
            value={amount===0?"":amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-between mt-3">
          <button
            className="btn btn-outline-secondary w-50 me-2"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="btn btn-success w-50"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default CardModal