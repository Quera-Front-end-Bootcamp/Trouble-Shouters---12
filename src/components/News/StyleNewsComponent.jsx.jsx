import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
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
  margin-bottom: 32vh;
`;
export const RightHeadline = styled.h2`
  color: #004458;
  font-size: 2.5rem;
  font-family: "lalezar";
  padding-bottom: 1.5rem;
`;
export const RightText = styled.div`
  font-size: 1.4rem;
  font-family: "w-yekan";
  color: #7e7e7e;
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
`;

export const LeftPagination = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border: 2px solid #088568;
  border-top: none;
`;

export const LeftButton = styled.img`
  width: 20px;
  cursor: pointer;
`;
