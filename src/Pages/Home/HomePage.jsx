import React from "react";
import Header from "../../components/Header/Header"
import CoursesComponent from "../../components/courses/CoursesComponent";
import News from "../../components/News/NewsComponent";
import Suggestion from "../../components/Suggestion/SuggestionComponent";
import FooterComponents from "../../components/Footer/FooterComponents";
import Statistics from "../../components/Statistics/StatisticsComponent";
import Introduction from "../../components/Introduction/Introduction";

import TrainingCourse from "../../components/Training Courses/Training Course/TrainingCourse";
import TrainingCourses from "../../components/Training Courses/TrainingCourses";
import DetailesMain from "../../components/DetailesMain/DetailesMain";


function HomePage() {

  return <>
  <Header/>
  {/* <Statistics/> */}
  <DetailesMain/>
  <CoursesComponent/>
  <Introduction/>
  <News />
  <Suggestion />
  <FooterComponents/>
  </>;
}

export default HomePage;
