import styled from "styled-components";
export const Container = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  position: relative;
  color: var(--main-color);
  @media (max-width: 480px) {
    flex-direction: column;
    height: 120vh;
  }
`;
export const RightDet = styled.div`
  width: 60%;
`;
export const RightDetTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
export const RightDetDec = styled.div`
  text-align: justify;
  @media (max-width: 480px) {
    max-height: 40vh;
    text-overflow: ellipsis;
    display: block;
    overflow: hidden;
  }
`;
export const LeftDet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  width: 300px;
  background-color: #ffffffe6;
  z-index: 1000;
`;
export const LeftDetTitle = styled.div`
  border-bottom: 2px solid var(--main-color);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
`;
export const LeftDetPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;
export const LeftDetDiscount = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  color: #f20000;
`;
export const LeftDetTotal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  color: #09b28b;
  font-weight: bold;
`;
export const LeftDetTimer = styled.div``;
export const LeftDetButton = styled.button`
  background-color: #09b28b;
  color: white;
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 16px;
`;
export const Lines = styled.div`
  position: absolute;
  height: 300px;
  width: 310px;
  border: 3px solid #dbdbdb;
  top: 0;
  left: 0;
  @media (max-width: 480px) {
    display: none;
  }
`;
export const Title = styled.div`
  color: var(--main-color);
`;
export const TitleCross = styled.div`
  color: var(--main-color);
  text-decoration: line-through;
`;
