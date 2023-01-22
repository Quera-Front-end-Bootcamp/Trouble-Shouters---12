import React from "react";

import Burger from "../Navbar/Burger/Burger";
import Search from "./Search/Search";
import { HeaderSite, Section, HeaderMain } from "./HeaderStyle";

const Header = () => {
  return (
    <>
      <HeaderMain>
        <Burger />
        <HeaderSite>
          <Section>
            <div className="title">
              <h2> باید راه بهتری برای آموزش ساخته میشد ،</h2>
              <h2>پس ما ساختیمش...</h2>
            </div>
            <div className="info">
              <div className="introduction">
                <p>سایت بامبو با هدف تولید و انتشار محتوای باکیفیت آموزشی</p>
                <p>و همچنین آشنایی جامعه با فضای کسب و کار در فضای مجازی</p>
                <p>ایجاد شده و امید داریم بتوانیم با راهکار های نوین ، فرصتی</p>
                <p>برای افراد خواهان پیشرفت فراهم کنیم .</p>
              </div>
              <button> مشاهده دوره ها</button>
            </div>
          </Section>
        </HeaderSite>
        <Search />
      </HeaderMain>
    </>
  );
};

export default Header;
