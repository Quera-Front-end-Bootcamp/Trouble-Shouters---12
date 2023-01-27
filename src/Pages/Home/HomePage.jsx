import React from "react";
import Header from "../../components/Header/Header"
import CoursesComponent from "../../components/courses/CoursesComponent";
import News from "../../components/News/NewsComponent";
import Suggestion from "../../components/Suggestion/SuggestionComponent";
import FooterComponents from "../../components/Footer/FooterComponents";
import Statistics from "../../components/Statistics/StatisticsComponent";
import Introduction from "../../components/Introduction/Introduction"

function HomePage() {
  return <>
  <Header/>
  <Statistics/>
  <CoursesComponent/>
  <Introduction/>
  <News />
  <Suggestion />
  <FooterComponents/>
  </>;
}

export default HomePage;
