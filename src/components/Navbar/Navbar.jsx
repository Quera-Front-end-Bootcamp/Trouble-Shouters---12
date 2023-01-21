import React from "react";
import { Border, Nav, UL, Div } from "./NavbarStyle";
import bambo from "../../images/header/bambo.png";

const Navbar = ({ open }) => {
  return (
    <>
      <Nav>
        <a href="#">
          <img src={bambo} /> بامبو
        </a>
        <UL open={open}>
          <li>
            <a href="#">دوره ها</a>
          </li>
          <li>
            <a href="#">مقالات</a>
          </li>
          <li>
            <a href="#">خدمات</a>
          </li>
          <li>
            <a href="#">درباره ما</a>
          </li>
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
