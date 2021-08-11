import React, {useState} from "react";

function Toggle() {
  const [isOn , setTog ] = useState(false)
  const color = isOn ? "red" : "white"
  function handleClick() {
    setTog((isOn) => !isOn)
  }
  return <button style={{background : color}}  onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;

