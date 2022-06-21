import React from "react";
import { Formcss } from "./Searchbar.style";
import { BsSearch } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

const Searchbar = () => {
  return (
    <Formcss action="">
      <span>
        <BsSearch />
      </span>
      <input type="text" />
      <span>
        <GrClose />
      </span>
    </Formcss>
  );
};

export default Searchbar;
