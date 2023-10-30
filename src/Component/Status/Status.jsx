import React from "react";
import "./Status.css";
import { alphabeticColorCode } from "../../Color";
const Status = ({ name }) => {
  return (
    <div
      className="imageContainer relative"
      style={{ width: "30px", height: "30px" }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: alphabeticColorCode[name[0].toLowerCase()],
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "medium",
          padding: "5px",
          fontWeight: "600",
        }}
      >
        <span style={{background:"none"}}>{name[0]}</span>
      </div>
      <div className="showStatus"></div>
    </div>
  );
};

export default Status;
