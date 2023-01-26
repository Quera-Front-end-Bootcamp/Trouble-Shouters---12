import React from "react";
import CoursesComponent from "../../components/courses/CoursesComponent";
import FooterComponents from "../../components/Footer/FooterComponents";
import News from "../../components/News/NewsComponent";
import Suggestion from "../../components/Suggestion/SuggestionComponent";

function HomePage() {
  return (
    <>
      {/* <CoursesComponent /> */}
      <News />
      <Suggestion />
      <FooterComponents />
    </>
  );
}

export default HomePage;
