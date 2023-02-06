import styled from "styled-components";
import Banner from "../../images/homePage/Class.png";

export const StatisticsBackground = styled.div`
  background-image: url(${Banner});
  height: 99.5vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: end;

`;

export const MainStatistics = styled.div`
  display: flex;
  justify-content: space-around;
  color: #fff;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-height: 740px) {
    padding: 5px;
    margin: 2px 0px;
  }
  div {
    bottom: 0px;
    background: #000000;
    opacity: 60%;
    height: 100%;
    text-align: center;
    padding: 100px 28px;
    margin: 0px 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      padding: 15px;
      margin: 2px 0px;
    }
    @media (max-height: 740px) {
      padding: 20px;
      margin: 2px 0px;
    }
    img {
      width: 60px;
      height: 60px;
      @media (max-height: 740px) {
        width: 40px;
        height: 40px;
      }
    }
    h2 {
      font-size: 2rem;
      @media (max-height: 740px) {
        font-size: 1.3rem;
      }
    }
    p {
      font-size: 1.3rem;
      font-weight: normal;
      @media (max-height: 740px) {
        font-size: 0.8rem;
      }
    }
  }
`;

