import React from 'react'
import { useNavigate } from 'react-router-dom';
import useLotteryStore from './Store/lotteryStore';

function Navbar() {

    const navigate=useNavigate();

    const {setResetModal}=useLotteryStore();

  
  const handleRedirect=()=>{
    
    navigate("/");
  }

  const handleReset=()=>{
    setResetModal(true);
  }

 return (
    <nav className="navbar bg-white sticky-top shadow-sm px-3 py-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
     

        <i class="fa-solid fa-house homeIcon" onClick={handleRedirect}></i>
      
       
       <button className="btn btn-primary rounded-pill px-5" onClick={handleReset} >
          Reset
        </button>

        {/* <button className="btn btn-danger rounded-pill px-3">
          LogOut
        </button> */}

      </div>
    </nav>
  );
}

export default Navbar


