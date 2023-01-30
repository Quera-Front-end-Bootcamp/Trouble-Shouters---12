import styled from "styled-components";

export const FormContainer = styled.form`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
  gap: 20px;
  padding: 15px;

  @media screen and (max-width: 768px) {
    width: 85vw;
  }

  @media screen and (min-width: 768.99px) and (max-width: 992px) {
    width: 45vw;
  }

  @media screen and (min-width: 992px) and (max-width: 1200px) {
    width: 35vw;
  }
`;

export const FormHeadLine = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormTitle = styled.h3`
  font-size: 40px;
  font-weight: 400;
  color: #004458;
  font-family: "lalezar";

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const HomeIcon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const FormControl = styled.div`
  :not(:last-of-type) {
    margin-bottom: 3px;
  }
`;

export const FormInput = styled.input`
  outline: none;
  border: none;
  background-color: #f1f1f1;
  width: 100%;
  padding: 12px;
  padding-right: 25px;
  color: #004458;
  font-size: 22px;
  font-weight: 400;
  cursor: pointer;
  font-family: "w-yekan";

  &::placeholder {
    color: #004458;
  }

  :focus {
    border-bottom: 3px solid #004458;
  }

  @media screen and (max-width: 768px) {
    font-size: 19px;
    padding: 8px;
    padding-right: 20px;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 14px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const RememberMe = styled.div`
  color: #004458;
  font-size: 23px;
  font-weight: 500;
  font-family: "w-yekan";

  @media screen and (max-width: 768px) {
    font-size: 19px;
    margin-bottom: 17px;
  }
`;
export const Checkbox = styled.input`
  transform: scale(1.5);
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
  accent-color: #004458;

  @media screen and (max-width: 768px) {
    transform: scale(1.1);
  }
`;
export const ForgetPass = styled.span`
  color: #004458;
  font-size: 23px;
  cursor: pointer;
  font-family: "w-yekan";

  @media screen and (max-width: 768px) {
    font-size: 19px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  margin-left: 0;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const StyleButton = styled.button`
  padding: 8px 45px;
  outline: none;
  background-color: ${(props) => props.bc};
  border: none;
  color: ${(props) => props.fc};
  cursor: pointer;
  font-size: 25px;
  font-family: "w-yekan";

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 19px;
  }
`;
