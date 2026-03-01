import React from "react";
import { useNavigate } from "react-router-dom";

const LotteryBox = ({ name, color,path }) => {
    const navigate=useNavigate();
   
     const handleBoxClick=()=>{
     
      navigate(`/${path}`);
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center shadow-sm m-2 me-2 mt-3"
      style={{
        background: color,   // accepts gradient or solid color
        height: "150px",
        borderRadius: "1rem",
        color: "black",
        fontSize: "2rem",
        fontWeight: "600",
        transition: "transform 0.2s ease",
        cursor: "pointer",
        width: "95%"
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onClick={handleBoxClick}
    >
      {name}
    </div>
  );
};

export default LotteryBox;