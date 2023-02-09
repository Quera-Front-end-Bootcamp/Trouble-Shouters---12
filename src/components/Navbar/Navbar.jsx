import React from "react";
import { Border, Nav, UL, Div } from "./NavbarStyle";
import bambo from "../../images/header/bambo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTE_HOME_PAGE, ROUTE_LOGIN_PAGE, ROUTE_REGISTER_PAGE } from "../../Routes/Routes";

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
        <Link to={ROUTE_HOME_PAGE}>
          <img src={bambo} /> بامبو
        </Link>
        <UL open={open}>
          {menu.map((menu) => (
            <li>
              {" "}
              <a href="#">{menu}</a>
            </li>
          ))}
          <div className="buttons-mobile">
            <Link to={ROUTE_LOGIN_PAGE}>
              <a className="enter-mobile">ورود</a>
            </Link>
            <Link to={ROUTE_REGISTER_PAGE}>
              <a className="active-mobile">ثبت نام</a>
            </Link>
          </div>
        </UL>

        <Div>
          <div>
            <Link to={ROUTE_LOGIN_PAGE} className="enter">
              ورود
            </Link>
            <Link to={ROUTE_REGISTER_PAGE} className="active">
              ثبت نام
            </Link>
          </div>
        </Div>
      </Nav>
      <Border />
    </>
  );
};
export default Navbar;
