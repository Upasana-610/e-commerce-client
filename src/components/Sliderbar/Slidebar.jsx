import React, { useState } from "react";
import { Cross, Grid, Shop, Shopslide, Slidebarcss } from "./Slidebar.style";
import { GrClose } from "react-icons/gr";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { IoMdArrowDropup } from "react-icons/io";

const Slidebar = () => {
  let [toggle, settoggle] = useState(false);
  const togglebutton = () => settoggle(!toggle);
  return (
    <>
      <div>
        <Cross>
          <GrClose />
        </Cross>

        <Slidebarcss>
          <Shop>
            <div>
              <span>SHOP</span>
              <span onClick={togglebutton}>
                {!toggle ? (
                  <MdOutlineArrowDropDown size={25} />
                ) : (
                  <IoMdArrowDropup size={25} />
                )}
              </span>
            </div>
            <Shopslide toggle={toggle}>
              <li>Shirts</li>
              <li>T-Shirts</li>
              <li>Jeans</li>
              <li>Bottom Wear</li>
              <li>Co-Ords</li>
              <li>Jackets</li>
              <li>Sweaters</li>
              <li>Pyjamas</li>
              <li>Boxers</li>
              <li>InnerWear</li>
            </Shopslide>
          </Shop>
          <li>WHAT'S NEW</li>
          <li>IN THE SPOTLIGHT</li>
          <li>SUSTAINABILTIY</li>
          <li>BULK ORDER</li>
          <li>PLACE RETURN/EXCHANGE REQUEST</li>
          <li>TRACK ORDER</li>
          <li>LOG IN</li>
          <li>
            <Grid>
              <li>
                <BsInstagram />
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </Grid>
          </li>
        </Slidebarcss>
      </div>
    </>
  );
};

export default Slidebar;
