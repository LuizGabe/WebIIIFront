import React from "react";

import lupaIcon from "../../../assets/lupa.svg";

import style from "./SearchBar.module.css";

const SearchBar = ({ placeholder, callBack }) => {
  return (
    <div className={style.searchBar}>
      <img className={style.SearchIcon} src={lupaIcon} alt="Search Icon" />

      <input
        type="text"
        onChange={(e) => { callBack(e.target.value) }}
        name="Search"
        placeholder={placeholder}
      />
    </div>
  )
}

export {
  SearchBar
}