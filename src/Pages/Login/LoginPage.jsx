import React from "react";
import { StyleContainer } from "../../components/LoginContainer/StyleLoginContainer";
import Form from "../../components/Form/FormComponent";
import Layout from "../../components/LoginLayout/LoginLayout";

const Login = () => {
  const formArr = [
    {
      name: "email",
      type: "email",
      placeholder: "ایمیل :",
    },
    {
      name: "password",
      type: "password",
      placeholder: "رمزعبور :",
    },
  ];

  return (
    <StyleContainer flexDirection={"column"}>
      <Layout />
      <Form
        title={"ورود کاربر"}
        formArr={formArr}
        firstColor={"#fff"}
        secondColor={"#004458"}
        flexDirection={"row"}
        login={true}
      />
    </StyleContainer>
  );
};

export default Login;
