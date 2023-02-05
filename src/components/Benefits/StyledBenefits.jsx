import styled from "styled-components";
import benefits from "../../images/ProductPage/benefits.png";
import learning from "../../images/ProductPage/online-learning.png";

export const Container = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  color: var(--main-color);
  background-color: #f9f9f9;
 
`;
export const RightPic = styled.div`
  background-image: url(${benefits});
  height: 100%;
  width: 35%;
  position: absolute;
  right: 0;
  top: 0;
`;
export const Des = styled.div`
  margin-bottom: 45px;
  display: flex;
  @media (max-width: 480px) {
    max-height: 8vh;
    text-overflow: ellipsis;
    display: block;
    overflow: hidden;
  }
`;
export const All = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 50px;
`;
export const Title = styled.div`
  font-size: 28px;
  margin-bottom: 40px;
`;
export const Pic = styled.div`
  background-image: url(${learning});
  height: 25px;
  width: 25px;
`;