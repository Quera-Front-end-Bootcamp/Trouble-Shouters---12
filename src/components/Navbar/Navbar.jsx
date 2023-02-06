import React from "react";
import { Border, Nav, UL, Div } from "./NavbarStyle";
import bambo from "../../images/header/bambo.png";
import { useState } from "react";

const Navbar = ({ open }) => {
  const [menu, setMenu] = useState([
    "دوره ها",
    " مقالات",
    " خدمات",
    "درباره ها",
  ]);
  return (
    <>
      <Nav>
        <a href="#">
          <img src={bambo} /> بامبو
        </a>
        <UL open={open}>
          {menu.map((menu) => (
            <li>
              {" "}
              <a href="#">{menu}</a>
            </li>
            
          ))}
           <div className="buttons-mobile">
            <a className="enter-mobile">ورود</a>
            <a className="active-mobile">ثبت نام</a>
          </div>
        </UL>

        <Div>
          <div>
            <a className="enter">ورود</a>
            <a className="active">ثبت نام</a>
          </div>
        </Div>
      </Nav>
      <Border />
    </>
  );
};
export default Navbar;
