import React from "react";
import styled from "styled-components";

import back from "../images/homePage/Details.png";
import DetailIcon1 from "../images/homePage/DetailIicon1.png";
import DetailIcon2 from "../images/homePage/DetailIicon2.png";
import DetailIcon3 from "../images/homePage/DetailIicon3.png";

const Container = styled.div`
  height: 100vh;
  background-image: url(${back});

`;
const Boxes = styled.div`
  background-color: rgb(0, 0, 0, 0.33) !important;
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  align-items: flex-end;
  @media (max-width: 480px) {
    flex-direction: column;
    height: 100vh;
  }
`;
const Box = styled.div`
  width: 33.4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: .3px solid #5d5b5b;
  height: 350px;
  background-color: rgb(0, 0, 0,.35);
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;
const Icon = styled.div`
  height: 40px;
  width: 40px;
  margin-bottom: 20px;
  
 img{
  height: 40px;
  width: 40px;
  @media (max-width: 480px) {
  height: 30px;
  width: 30px;
}
 }
 @media (max-width: 480px) {
  height: 30px;
  width: 30px;
}
`;
const Title = styled.div`
  font-size: 32px;
  @media (max-width: 480px) {
  font-size: 24px;

}
`;
const Details = styled.div`
  color: #bfbfbf;
  text-align: center;
  padding: 20px 40px;
  font-size: 14px;
`;

const DetailesMain = () => {
  return (
    <>
      <Container>
        <Boxes>
          <Box>
            <Icon ><img src={DetailIcon1} alt="" srcset="" /></Icon>
            <Title>576 دانشجو</Title>
            <Details>
              تا کنون بیش از 500 نفر از آموزش های بامبو استفاده کرده اند .و
              نظرات خودشونو ثبت کرده اند
            </Details>
          </Box>
          <Box>
          <Icon ><img src={DetailIcon2} alt="" srcset="" /></Icon>
            <Title>34 استاد</Title>
            <Details>
              بیش از 30 استاد ، از برترین اساتید ایران همراه ما هستند .و دوره
              های خودشونو ثبت کرده اند
            </Details>
          </Box>
          <Box>
          <Icon ><img src={DetailIcon3} alt="" srcset="" /></Icon>
            <Title>219 دوره</Title>
            <Details>
              تا کنون بیش از 200 دوره ، از دسته بندی های متفاوت .در سایت ثبت شده
              و قابل دسترسی است
            </Details>
          </Box>
        </Boxes>
      </Container>
    </>
  );
};

export default DetailesMain;
