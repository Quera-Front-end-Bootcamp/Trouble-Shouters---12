import React from "react";
import styled from "styled-components";
import jsPic from "../../images/homePage/js.png";
import cPic from "../../images/homePage/c.png";
import javaPic from "../../images/homePage/java.png";
import bootstrapPic from "../../images/homePage/bootstrap.png";
import { ROUTE_PRODUCTS_PAGE } from "../../Routes/Routes";

import {
  Container,
  LeftContainer,
  LeftTitle,
  LeftDec,
  LeftButton,
  RightContainer,
  RightBox,
  RightJsBox,
  RightCBox,
  RightBootStrapBox,
  RightJavaBox,
  RightButton,
  ContainerMobile,
  RightContainerMobile,
  Box,
  LeftContainerMobile,
  LeftTitleMobile,
  LeftDecMobile,
  RightBoxMobile,
  LeftButtonMobile,
} from "./StyleCoursesComponents";
import { Link } from "react-router-dom";

const CoursesComponent = () => {
  return (
    <>
      <Container>
        <RightContainer>
          <RightBox>
            <RightJsBox>
              <img src={jsPic}></img>{" "}
              <RightButton>دوره جاوا اسکریپت</RightButton>
            </RightJsBox>
            <RightCBox>
              <img src={cPic}></img> <RightButton>دوره سی شارپ</RightButton>
            </RightCBox>
            <RightBootStrapBox>
              <img src={bootstrapPic}></img>{" "}
              <RightButton>دوره بوت استرپ</RightButton>
            </RightBootStrapBox>
            <RightJavaBox>
              <img src={javaPic}></img> <RightButton>دوره جاوا </RightButton>
            </RightJavaBox>
          </RightBox>
        </RightContainer>
        <LeftContainer>
          <LeftTitle>دوره های آموزشی</LeftTitle>
          <LeftDec>
            دسترسی به با کیفیت ترین دوره های آموزشی آنلاین با تدریس برترین
            اساتید ایران در دسته بندی های ، گوناگونی همچون طراحی ، برنامه نویسی
            ، اقتصاد ... فلسفه ، فیزیک ، شیمی ، ریاضی ، هنر و
          </LeftDec>
          <Link to={ROUTE_PRODUCTS_PAGE}>
            <LeftButton>مشاهده دوره ها</LeftButton>
          </Link>
        </LeftContainer>
      </Container>

      <ContainerMobile>
        <LeftContainerMobile>
          <LeftTitleMobile>دوره های آموزشی</LeftTitleMobile>
          <LeftDecMobile>
            دسترسی به با کیفیت ترین دوره های آموزشی آنلاین با تدریس برترین
            اساتید ایران در دسته بندی های ، گوناگونی همچون طراحی ، برنامه نویسی
            ، اقتصاد ... فلسفه ، فیزیک ، شیمی ، ریاضی ، هنر و
          </LeftDecMobile>
          <LeftButtonMobile>مشاهده دوره ها</LeftButtonMobile>
        </LeftContainerMobile>
        <RightContainerMobile>
          <RightBoxMobile>
            <Box inputColor="#f7df1e">
              <img src={jsPic}></img>{" "}
              <RightButton>دوره جاوا اسکریپت</RightButton>
            </Box>
            <Box inputColor="#6a1577">
              <img src={cPic}></img> <RightButton>دوره سی شارپ</RightButton>
            </Box>
            <Box inputColor="#cab2ef">
              <img src={bootstrapPic}></img>{" "}
              <RightButton>دوره بوت استرپ</RightButton>
            </Box>
            <Box inputColor="#ffc7f8">
              <img src={javaPic}></img> <RightButton>دوره جاوا </RightButton>
            </Box>
          </RightBoxMobile>
        </RightContainerMobile>
      </ContainerMobile>
    </>
  );
};

export default CoursesComponent;
