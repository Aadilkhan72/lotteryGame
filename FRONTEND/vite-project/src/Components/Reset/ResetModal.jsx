import React, { useState } from 'react'
import useLotteryStore from '../../Store/lotteryStore';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function ResetModal() {

    const { setResetModal, setSnackbarMsg,setSnackbarOpen,setSnackbartype}=useLotteryStore();
     
    const navigate=useNavigate();

    const [pass,setPass]=useState("");

    const onClose=()=>{
        setResetModal(false);
    }
    const handleSubmit=()=>{
      

         if(pass==""){
            alert("Enter password");
            return;
         }


         axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/reset-data`,{pass},{withCredentials:true})
         .then((res)=>{
            console.log(res);
            setSnackbarOpen(true);
            setSnackbarMsg(res.data.message);
            setSnackbartype("success");
            setTimeout(()=>{
             window.location.reload();
            },1000);
            
        
         })
         
         .catch(e=>{
              console.log(e);
              setSnackbarOpen(true);
           const errorMessage =
    e.response?.data?.message || e.message || "Something went wrong";
            setSnackbarMsg(errorMessage);
            setSnackbartype("error");
            setTimeout(()=>{
                window.location.reload();
            },2000);
         
         })


         onClose();
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
        <h5 className="mb-3 text-center">Enter Password to Reset</h5>

       
        {/* Amount Field */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
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

export default ResetModal