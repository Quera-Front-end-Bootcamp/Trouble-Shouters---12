import styled from "styled-components";

export const StatisticsBackground = styled.div`
  background: black;
  width: 100%;
  height: 99.5vh;
  img {
    opacity: 80%;
    width: 100%;
    height: 99.5vh;
  }
`;

export const MainStatistics = styled.div`
  margin: 5px 0px;
  position: absolute;
  bottom: -100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: #fff;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-height: 740px) {
    height: 95%;
    padding: 5px;
    margin: 2px 0px;
    position: absolute;
    bottom: -100%;
    width: 100%;
  }
  div {
    bottom: 0px;
    background: #000000;
    opacity: 60%;
    height: 100%;
    text-align: center;
    padding: 100px 28px;
    margin: 0px 1px;
    gap: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 40%;
    @media (max-width: 768px) {
      padding: 15px;
      margin: 2px 0px;
    }
    img {
      width: 60px;
      height: 60px;
    }
    h2 {
      font-size: 2rem;
        font-size: 1.3rem;
      }
    }
    p {
      font-size: 1.3rem;
      font-weight: normal;
      @media (max-height: 740px) {
        font-size: 0.7rem;
      }
    }
  }
`;
