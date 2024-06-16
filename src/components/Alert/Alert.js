import { useEffect, useState } from "react";
import "./Alert.css";

const Alert = ({ show, texto }) => {
  return (
    <div
      id="alert"
      style={
        show ? { opacity: 1, right: "20px" } : { opacity: 0, right: "-300px" }
      }
    >
      {texto}
    </div>
  );
};

export default Alert;
