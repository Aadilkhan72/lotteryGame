import React from "react";
import useLotteryStore from "../../Store/lotteryStore";
import { useNavigate } from "react-router-dom";

const Box = ({ color = "#0d6efd", name = "Default" ,divColor }) => {

  const {setLotteryName} =useLotteryStore();

  const navigate=useNavigate();

  const handleBoxClick=()=>{
      setLotteryName(name);
      navigate("/lotteryPage");
  }

  
  return (
    <div
      className="d-flex justify-content-center align-items-center shadow-sm ms-1 mb-2"
      style={{
        background:divColor,
        height: "120px",
        borderRadius: "1rem",
        color: "black",
        fontSize: "20px",
        fontWeight: "600",
        transition: "transform 0.2s ease",
        cursor: "pointer",
        width:"48%",
        textAlign:"center"
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}

      onClick={handleBoxClick}
    >
      {name}
    </div>
  );
};

export default Box;