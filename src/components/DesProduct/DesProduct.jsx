import Burger from "../Navbar/Burger/Burger";

import styled from "styled-components";
import headerImg from "../../images/ProductPage/back.png";
import js from "../../images/ProductPage/js.png";
export const HeaderMain = styled.header`
  background-image: url(${headerImg});
  background-position: top center;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 1000px rgba(31, 30, 30, 0.7);
  width: 100%;
  height: 100vh;
`;
export const Container = styled.div`
  color: white;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Logo = styled.img`
  height: 120px;
  width: 100px;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 36px;
  padding: 10px 60px;
  border-bottom: 1px solid #838181;
`;
export const Numbers = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  font-size: 20px;
  width: 100%;
`;
export const All = styled.div``;
export const Number = styled.div``;
export const ProgressBar = styled.div`
  background-color: #dbdbdb;
  height: 40px;
  width: 300px;
  color: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 20px;
`;
export const Boxes = styled.div`
  display: flex;
  width: 100%;
`;
export const Box = styled.div`
  width: 33.3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #838181;
  padding: 80px;
  margin-bottom: 44px;
  background-color: rgba(31, 30, 30, 0.7);
`;
export const BoxLogo = styled.div``;
export const Line1 = styled.div``;
export const Line2 = styled.div``;

const DesProduct = () => {
  return (
    <>
      <HeaderMain>
        <Burger />
        <Container>
          <Details>
            <Logo src={js} />
            <Title>دوره جاوا اسکریپت</Title>
            <Numbers>
              <All>ظرفیت : 59 نفر</All>
              <Number>دانشجو : 53 نفر</Number>
            </Numbers>
            <ProgressBar>50%</ProgressBar>
          </Details>
          <Boxes>
            <Box>
              <BoxLogo></BoxLogo>
              <Line1>: مدرس</Line1>
              <Line2>دکتر بحر العلومی</Line2>
            </Box>
            <Box>
              <BoxLogo></BoxLogo>
              <Line1>تاریخ شروع : 1401/1/1</Line1>
              <Line2>تاریخ پایان : 1402/1/1</Line2>
            </Box>
            <Box>
              <BoxLogo></BoxLogo>
              <Line1>رتبه :</Line1>
              <Line2></Line2>
            </Box>
          </Boxes>
        </Container>
      </HeaderMain>
    </>
  );
};

export default DesProduct;
