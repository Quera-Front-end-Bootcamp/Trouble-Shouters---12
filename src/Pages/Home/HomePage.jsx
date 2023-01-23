import React from "react";
import Header from "../../components/Header/Header"
import CoursesComponent from "../../components/courses/CoursesComponent";
import FooterComponents from "../../components/Footer/FooterComponents";
import Statistics from "../../components/Statistics/StatisticsComponent";
function HomePage() {
  return <>
  <Header/>
  <Statistics/>
  
  <CoursesComponent/>
  <FooterComponents/>
  </>;
}

export default HomePage;
