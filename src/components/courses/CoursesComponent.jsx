import React from "react";
import styled from "styled-components";
import jsPic from "../../images/homePage/js.png";
import cPic from "../../images/homePage/c.png";
import javaPic from "../../images/homePage/java.png";
import bootstrapPic from "../../images/homePage/bootstrap.png";
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
} from "./StyleCoursesComponents";

const CoursesComponent=()=> {
  return (
    <Container>
      <RightContainer>
        <RightBox>
          <RightJsBox>
            <img src={jsPic}></img> <RightButton>دوره جاوا اسکریپت</RightButton>
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
          دسترسی به با کیفیت ترین دوره های آموزشی آنلاین با تدریس برترین اساتید
          ایران در دسته بندی های ، گوناگونی همچون طراحی ، برنامه نویسی ، اقتصاد
          ... فلسفه ، فیزیک ، شیمی ، ریاضی ، هنر و
        </LeftDec>
        <LeftButton>مشاهده دوره ها</LeftButton>
      </LeftContainer>
    </Container>
  );
}

export default CoursesComponent;
