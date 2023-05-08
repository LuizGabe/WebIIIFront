import React from "react";

import style from "./IconButton.module.css";

const IconButton = ({ icon, onClick, style }, ...rest) => {
  return (
    <button onClick={() => onClick()}>
      <img style={style} src={icon} alt="icon" />
    </button>
  )
}

export {
  IconButton
}