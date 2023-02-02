import React from "react";
import styled from "styled-components";
import Burger from "../Navbar/Burger/Burger";
import grid from '../../images/CoursesV2/Grid.png';
import Search from "../Header/Search/Search";

const Container = styled.div`
height: 14.5vh;
background-image: url(${grid});

`;
const Gap = styled.div`
height: 4vh;
background-image: url(${grid});

`;
const HeaderCourse = () => {
  return (
    <Container>
      <Burger />
      <Gap/>
      <Search/>
    </Container>
  );
};

export default HeaderCourse;
