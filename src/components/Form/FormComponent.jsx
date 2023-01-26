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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_REGISTER_PAGE } from "../../Routes/Routes";
import { ROUTE_LOGIN_PAGE } from "../../Routes/Routes";

const prepareForm = (formArr) => {
  return formArr.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
};

const Form = ({
  title,
  formArr,
  firstColor,
  secondColor,
  login,
  flexDirection,
  onSubmit,
}) => {
  const initialForm = prepareForm(formArr);
  const [form, setForm] = useState(initialForm);
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSumbitHandler = () => onSubmit(form, () => setForm(initialForm));

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
            placeholder={placeholder}
            value={form[name]}
            onChange={(e) => onChangeHandler(e)}
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
        <StyleButton
          onS
          bc={firstColor}
          fc={secondColor}
          onClick={(e) => {
            e.preventDefault();
            if (login) {
              navigate(ROUTE_REGISTER_PAGE);
              return;
            }
            onSumbitHandler();
          }}
        >
          ثبت نام
        </StyleButton>
        <StyleButton
          bc={secondColor}
          fc={firstColor}
          onClick={(e) => {
            e.preventDefault();
            if (!login) {
              navigate(ROUTE_LOGIN_PAGE);
              return;
            }
            onSumbitHandler();
          }}
        >
          ورود
        </StyleButton>
      </ButtonContainer>
    </FormContainer>
  );
};
export default Form;

Form.defaultProps = {
  title: "ورود کاربر",
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
