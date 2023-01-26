import React from "react";
import { StyleContainer } from "../../components/LoginContainer/StyleLoginContainer";
import Form from "../../components/Form/FormComponent";
import Layout from "../../components/LoginLayout/LoginLayout";
import registerImage from "../../images/loginPage/Register.png";
import axios from "axios";

const Register = () => {
  const url = "https://63d14f753f08e4a8ff952f49.mockapi.io/users";

  const onSubmitHandler = (form, reset) => {
    axios({
      method: "post",
      url: url,
      data: form,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    reset();
  };

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
        onSubmit={onSubmitHandler}
      />
      <Layout imgUrl={registerImage} />
    </StyleContainer>
  );
};

export default Register;
