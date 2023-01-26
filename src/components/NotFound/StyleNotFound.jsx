import styled from "styled-components";
import notFoundGif from "../../images/NotFoundPage/404.gif";

export const Container = styled.section`
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const NotFoundHeader = styled.header`
  color: #004458;
  font-family: "lalezar";
  font-size: 150px;
`;
export const NotFoundGif = styled.div`
  background: url(${notFoundGif}) no-repeat center;
  height: 380px;
  width: 80%;
  background-position: center;
`;
export const NotFoundButton = styled.button`
  padding: 8px 45px;
  outline: none;
  background-color: #004458;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 25px;
  font-family: "w-yekan";
`;
