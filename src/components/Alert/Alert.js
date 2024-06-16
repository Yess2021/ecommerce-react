import { useEffect, useState } from "react";
import "./Alert.css";

const Alert = ({ texto }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    setTimeout(()=> setShow(false), 2000)
  }, [texto]);

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
