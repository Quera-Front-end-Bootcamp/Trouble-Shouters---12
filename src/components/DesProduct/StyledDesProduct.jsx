import styled from "styled-components";
import headerImg from "../../images/ProductPage/back.png";
import js from "../../images/ProductPage/js.png";
import teacher from "../../images/ProductPage/teacher.png";
import like from "../../images/ProductPage/like.png";
import calendar from "../../images/ProductPage/calendar.png";

export const HeaderMain = styled.header`
  background-image: url(${headerImg});
  background-position: top center;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 1000px rgba(31, 30, 30, 0.7);
  width: 100%;
  height: 100vh;
  @media (max-width: 480px) {
    height: 900px;
  }
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
  @media (max-width: 480px) {
    height: 100px;
    width: 80px;
  }
`;
export const Title = styled.div`
  font-size: 36px;
  padding: 10px 60px;
  border-bottom: 1px solid #838181;
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;
export const Numbers = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  font-size: 20px;
  width: 100%;
`;
export const All = styled.div`
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
export const Number = styled.div`
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
export const ProgressBar = styled.div`
  background-color: rgb(144, 144, 144,.7);
  height: 40px;
  width: 300px;
  color: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 20px;
  position: relative;
`;
export const Progresser = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  width: ${({ percent }) => percent}%;
  background-color: #DBDBDB;
  text-align: left;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 10px;
`;
export const Boxes = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 480px) {
  flex-direction: column;
  margin-bottom: 55px;
  justify-content: center;
  align-items: center;
  }
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
  img {
    height: 25px;
    width: 25px;
    margin-bottom: 5px;
  }
  @media (max-width: 480px) {
  width: 80%;
  height: 70px;
  margin-bottom: 0;
  }
`;
export const BoxLogo = styled.div``;
export const Line = styled.div`
  margin-top: 7px;
  @media (max-width: 480px) {
    margin-top: 3px;
    font-size: 12px;
  }
`;