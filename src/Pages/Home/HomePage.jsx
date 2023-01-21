import React from "react";
import Header from "../../components/Header/Header"
import CoursesComponent from "../../components/courses/CoursesComponent";
import FooterComponents from "../../components/Footer/FooterComponents";

function HomePage() {
  return <>
  <Header/>
  <CoursesComponent/>
  <FooterComponents/>
  </>;
}

export default HomePage;
