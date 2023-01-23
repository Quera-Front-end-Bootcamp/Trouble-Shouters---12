import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 100px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 40vw;
  position: relative;
  border-left: 2px solid #d1d1d1;
  border-bottom: 2px solid #d1d1d1;
  padding: 80px 60px;
  margin-bottom: 180px;

  @media (max-width: 768px) {
    width: 100%;
    border-left: none;
    padding: 80px 40px;
    margin-bottom: 0;
  }

  @media (min-width: 768.99px) and (max-width: 992px) {
    width: 45vw;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    margin-bottom: 35vh;
    padding: 70px 55px;
  }
`;
export const RightHeadline = styled.h2`
  color: #004458;
  font-size: 2.5rem;
  font-family: "lalezar";
  padding-bottom: 1.5rem;

  @media (max-width: 576px) {
    font-size: 25px;
  }
`;
export const RightText = styled.div`
  font-size: 1.4rem;
  font-family: "w-yekan";
  color: #7e7e7e;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;
export const RightButton = styled.button`
  outline: none;
  background-color: #004458;
  color: #fff;
  padding: 12px 16px;
  position: absolute;
  width: 150px;
  height: 60px;
  bottom: -30px;
  left: 8vw;
  border: none;
  font-size: 1.1rem;
  font-family: "w-yekan";
`;

export const LeftContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100vw;
  }

  @media (min-width: 768.99px) and (max-width: 992px) {
    width: 55vw;
  }
`;

export const LeftFigure = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftImage = styled.img`
  width: 450px;
  height: 285px;

  @media (max-width: 576px) {
    width: 300px;
    height: 225px;
  }

  @media (min-width: 768.99px) and (max-width: 992px) {
    width: 385px;
    height: 285px;
  }
`;
export const LeftFigureCaption = styled.figcaption`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  padding: 15px;
  background-color: #004458;
  opacity: 85%;
  font-size: 16px;
  text-align: center;
  font-family: "w-yekan";
`;

export const LeftText = styled.h3`
  color: #fff;

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

export const LeftPagination = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border: 2px solid #088568;
  border-top: none;

  @media (max-width: 576px) {
    width: 250px;
  }
`;

export const LeftButton = styled.img`
  width: 20px;
  cursor: pointer;
`;
