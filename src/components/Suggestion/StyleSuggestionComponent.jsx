import styled from "styled-components";

export const Container = styled.section`
  height: 450px;
  background-color: #088568;
  display: flex;

`;

export const SuggestionForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  margin: 0 auto;

`;

export const SuggestionHeadLine = styled.h2`
  font-size: 2rem;
  font-family: "lalezar";
  color: #fff;

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

`;

export const SuggestionButton = styled.button`
  padding: 8px 32px;
  outline: none;
  background-color: #004458;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-family: "w-yekan";
  border: none;
  margin-left: 0;
  margin-right: auto;
  cursor: pointer;

`;
