import {
  StyleButton,
  ButtonContainer,
  Checkbox,
  SecondContainer,
  ForgetPass,
  FormContainer,
  FormControl,
  FormInput,
  FormTitle,
  RememberMe,
  HomeIcon,
  FormHeadLine,
} from "./StyleFormComponent";

import home from "../../images/loginPage/BlueHomeIcon.png";

const Form = ({
  title,
  formArr,
  firstColor,
  secondColor,
  login,
  flexDirection,
}) => {
  return (
    <FormContainer>
      <FormHeadLine>
        <FormTitle>{title}</FormTitle>
        <HomeIcon src={home} alt="home" />
      </FormHeadLine>
      {formArr.map(({ placeholder, name, type }, index) => (
        <FormControl key={index}>
          <FormInput
            id={name}
            name={name}
            type={type}
            // value={}
            placeholder={placeholder}
          />
        </FormControl>
      ))}
      {login && (
        <SecondContainer>
          <RememberMe>
            <label htmlFor=""></label>
            من را به خاطر بسپار
            <Checkbox type="checkbox" />
          </RememberMe>
          <ForgetPass>فراموشی رمز</ForgetPass>
        </SecondContainer>
      )}
      <ButtonContainer flexDirection={flexDirection}>
        <StyleButton bc={firstColor} fc={secondColor}>
          ثبت نام
        </StyleButton>
        <StyleButton bc={secondColor} fc={firstColor}>
          ورود
        </StyleButton>
      </ButtonContainer>
    </FormContainer>
  );
};
export default Form;

Form.defaultProps = {
  title: "ورود کاربر",
  forget: false,
  formArr: [
    {
      name: "email",
      type: "email",
      Placeholder: "ایمیل:",
    },
    {
      name: "password",
      type: "password",
      Placeholder: "رمز عبور:",
    },
  ],
};
