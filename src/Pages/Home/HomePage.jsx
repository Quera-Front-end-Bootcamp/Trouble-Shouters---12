import React from "react";
import CoursesComponent from "../../components/courses/CoursesComponent";
import FooterComponents from "../../components/Footer/FooterComponents";
import Statistics from "../../components/Statistics/StatisticsComponent";
function HomePage() {
  return <>
  <Statistics/>
  <CoursesComponent/>
  <FooterComponents/>
  </>;
}

export default HomePage;
