import styled from "styled-components";
import loginImage from "../../images/loginPage/login.png";

export const Container = styled.section`
  height: 100vh;
  width: 65vw;
  /* background-image: url(${loginImage}); */
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &::before {
    background-color: #004458;
    opacity: 80%;
    content: "";
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 0;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
    gap: 10px;
    padding: 85px 20px;
  }

  @media screen and (min-width: 769px) and (max-width: 992px) {
    width: 55vw;
  }

  @media screen and (min-width: 992px) and (max-width: 1200px) {
    width: 60vw;
  }
`;

export const Headline = styled.h2`
  font-size: 2.6rem;
  font-weight: 400;
  color: #fff;
  z-index: 1;
  font-family: "lalezar";

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const Hr = styled.hr`
  color: #dbdbdb;
  width: 350px;
  z-index: 1;

  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

export const HeadLineIcon = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 15px;
  z-index: 1;
  display: ${(props) => props.display};
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.display ? "block" : "none")};
    width: 25px;
    height: 25px;
  }
`;

export const SocialIcons = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;

export const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HomeIcon = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  bottom: 40px;
  z-index: 1;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
