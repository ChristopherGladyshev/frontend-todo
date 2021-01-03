import React from "react";
import "./index.scss";

export const PageBtn = ({indexPage, index, pageSwitch, handleClick}) => {
  return (
    <button
      type="button"
      className={indexPage === index ? "btn btn-outline-success btn-sm float-center page-btn active-btn": "btn btn-outline-success btn-sm float-center page-btn"}
      onClick={()=>{
        handleClick();
        pageSwitch(index);
      }}
    >
     {index}
    </button>
  );
};
