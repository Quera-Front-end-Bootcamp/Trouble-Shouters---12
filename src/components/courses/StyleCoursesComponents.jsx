import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 40vw;
  position: relative;
  border-right: 2px solid #d1d1d1;
  border-bottom: 2px solid #d1d1d1;
  padding: 50px;
  margin-bottom: 30vh;
`;
export const LeftTitle = styled.h2`
  color: #004458;
  font-size: 2.5rem;
  padding-bottom: 1.5rem;
  font-weight: normal;
`;
export const LeftDec = styled.div`
  color: #7e7e7e;
  text-align: justify;
  font-size: 1.5rem;
  padding-bottom: 3rem;
`;
export const LeftButton = styled.button`
  background-color: #004458;
  color: white;
  padding: 12px 16px;
  position: absolute;
  width: 150px;
  height: 60px;
  bottom: -30px;
  left: 8vw;
  border: none;
  font-size: 1rem;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  height: 100%;
  flex-grow: 1;
`;
export const RightBox = styled.div`
  border: 3px solid #09b28b;
  height: 60vh;
  width: 28vw;
  position: relative;
`;

export const RightJsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7df1e;
  position: absolute;
  left: -140px;
  top: -40px;
  height: 350px;
  width: 280px;
  z-index: 1;
`;
export const RightCBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #6a1577;
  position: absolute;
  right: -85px;
  top: 30px;
  height: 230px;
  width: 350px;
  z-index: 1;
`;
export const RightBootStrapBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cab2ef;
  position: absolute;
  left: -90px;
  bottom: -150px;
  height: 250px;
  width: 230px;
  z-index: 1;
`;
export const RightJavaBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffc7f8;
  position: absolute;
  right: 15px;
  bottom: -100px;
  height: 250px;
  width: 250px;
  z-index: 1;
`;
export const RightButton = styled.div`
  color: #004458;
  background-color: white;
  padding: 15px 20px;
  margin-top: 2rem;
`;
