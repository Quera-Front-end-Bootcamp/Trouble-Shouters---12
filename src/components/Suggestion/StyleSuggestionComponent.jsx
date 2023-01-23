import styled from "styled-components";
import image from "../../images/homePage/suggestionImage.png";

export const Container = styled.section`
  height: 450px;
  background-color: #088568;
  display: flex;

  @media (max-width: 576px) {
    height: 250px;
    margin-top: 100px;
  }

  @media (min-width: 576.99px) and (max-width: 768.99px) {
    margin-top: 150px;
    height: 250px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    height: 330px;
  }
`;

export const SuggestionForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const StyleImg = styled.div`
  width: 50vw;
  height: 100%;
  background-image: url(${image});
  background-size: cover;
  @media (max-width: 576px) {
    width: 45vw;
  }
`;

export const SuggestionHeadLine = styled.h2`
  font-size: 2rem;
  font-family: "lalezar";
  color: #fff;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export const SuggestionInput = styled.input`
  width: 350px;
  height: 45px;
  outline: none;
  background-color: #00775b;
  border: none;
  padding: 10px;
  padding-right: 16px;
  color: #fff;
  font-family: "w-yekan";
  font-size: 16px;

  &::placeholder {
    color: #0cdbab;
  }
  :focus {
    border-bottom: 2px solid #0cdbab;
  }

  @media (max-width: 576px) {
    width: 175px;
    height: 30px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 250px;
  }
`;

export const SuggestionButton = styled.button`
  padding: 8px 32px;
  outline: none;
  background-color: #004458;
  color: #fff;
  font-size: 18px;
  font-family: "w-yekan";
  border: none;
  margin-left: 0;
  margin-right: auto;
  cursor: pointer;

  @media (max-width: 576px) {
    padding: 3px 18px;
    font-size: 16px;
  }
`;
