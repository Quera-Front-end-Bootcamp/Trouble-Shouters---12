import React from "react";
import { StyleContainer } from "../../components/LoginContainer/StyleLoginContainer";
import Form from "../../components/Form/FormComponent";
import Layout from "../../components/LoginLayout/LoginLayout";

const Register = () => {
  const formArr = [
    {
      name: "username",
      type: "text",
      placeholder: "نام کاربری :",
    },
    {
      name: "email",
      type: "email",
      placeholder: " ایمیل :",
    },
    {
      name: "tel",
      type: "tel",
      placeholder: "شماره موبایل :",
    },
    {
      name: "userID",
      type: "number",
      placeholder: "شماره ملی :",
    },
    {
      name: "birthday",
      type: "text",
      placeholder: "تاریخ تولد :",
    },
    {
      name: "password",
      type: "password",
      placeholder: "رمزعبور :",
    },
  ];

  return (
    <StyleContainer flexDirection={"column-reverse"}>
      <Form
        title={"ثبت نام"}
        formArr={formArr}
        firstColor={"#004458"}
        secondColor={"#fff"}
        flexDirection={"row-reverse"}
        login={false}
      />
      <Layout />
    </StyleContainer>
  );
};

export default Register;
