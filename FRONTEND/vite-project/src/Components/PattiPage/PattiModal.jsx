import React from 'react'
import useLotteryStore from '../../Store/lotteryStore';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function PattiModal({ disableParent }) {

    const {lotteryName,patti,setPatti,amount,amtMulti,setAmtMulti,setAmount,setPattiModal, setSnackbarMsg,setSnackbarOpen,setSnackbartype}=useLotteryStore();
      const navigate=useNavigate();
    const onClose=()=>{
        setPattiModal(false);
    }
    const handleSubmit=()=>{
         
      disableParent();
         onClose();
         const finalAmt=amount*amtMulti;
         
         if(lotteryName===""){
            alert("Select lottery first");
            return;
         }

           if(patti==""){
           alert("Enter patti number");
            return ;
         }
         

         axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/update-patti`,{lotteryName,patti,finalAmt},{withCredentials:true})
         .then((res)=>{
            setSnackbarOpen(true);
            setSnackbarMsg(res.data.message);
            setSnackbartype("success");
            setTimeout(()=>{
               window.location.reload();
            },1000);
           
            setAmount(0);
            setPatti(0);
            
        
         })
         
         .catch((e)=>{
               console.log(e);
                 setSnackbarOpen(true);
                 const errorMessage =
    e.response?.data?.message || e.message || "Something went wrong";
            setSnackbarMsg(errorMessage);
            setSnackbartype("error");
              setTimeout(()=>{
                window.location.reload();
            },2000);
            setAmount(0);
            setPatti(0);
            setAmtMulti(1);
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
        <h5 className="mb-3 text-center">Enter Patti Details</h5>

        {/* Card Field */}
        <div className="mb-3">
          <label className="form-label">Patti</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter patti  number"
            maxLength={3}
            value={patti===0?"":patti}
            onChange={(e) => setPatti(e.target.value)}
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

export default PattiModal;