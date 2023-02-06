import React from "react";
import styled from "styled-components";
import Burger from "../Navbar/Burger/Burger";
import grid from "../../images/CoursesV2/Grid.png";
// import Search from "../Header/Search/Search";
import search from '../../images/header/search.png'

const Search = styled.div`
  height: 7vh;
  width: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 40px;
  color: #DBDBDB;
  @media (max-width: 480px) {
    
  }
`;
const Icon = styled.div`
  height: 20px;
  width: 20px;
  margin-left: 10px;
  color: #fff;
  margin-top: 5px;
  img{
    height: 20px;
    width: 20px;
  }

`;

const Container = styled.div`
  height: 130px;
  background-image: url(${grid});
  @media (max-width: 480px) {
    height: 100px;
  }
`;
const Gap = styled.div`
  height: 35px;
  background-image: url(${grid});
  @media (max-width: 480px) {
    height: 0;
  }
`;
const HeaderCourse = () => {
  return (
    <Container>
      <Burger />
      <Gap />
      <Search>
        <Icon >
          <img src={search} alt="" srcset="" />
        </Icon>
        جستجو ...
      </Search>
    </Container>
  );
};

export default HeaderCourse;
