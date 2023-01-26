import React from "react";
import { StyleContainer } from "../../components/LoginContainer/StyleLoginContainer";
import Form from "../../components/Form/FormComponent";
import Layout from "../../components/LoginLayout/LoginLayout";
import loginImage from "../../images/loginPage/login.png";
import axios from "axios";

const Login = () => {
  const url = "https://63d14f753f08e4a8ff952f49.mockapi.io/users";

  const onSubmitHandler = (form, reset) => {
    axios({
      method: "get",
      url: url,
      data: form,
    })
      .then(function (response) {
        console.log(response);
        console.log(form);
      })
      .catch(function (error) {
        console.log(error);
      });
    reset();
  };

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
      <Layout imgUrl={loginImage} />
      <Form
        title={"ورود کاربر"}
        formArr={formArr}
        firstColor={"#fff"}
        secondColor={"#004458"}
        flexDirection={"row"}
        login={true}
        onSubmit={onSubmitHandler}
      />
    </StyleContainer>
  );
};

export default Login;
