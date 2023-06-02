import React from "react";
import style from "./Stack.module.css"

export function Stack({ name, color }) {
  return (
    <span 
      className={style.span} 
      style={{ backgroundColor: color, color: "#e1e1e6" }}>#{name}</span>
  )
}
