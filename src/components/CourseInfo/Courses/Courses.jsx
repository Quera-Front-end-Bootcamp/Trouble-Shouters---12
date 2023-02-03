import React, { useState } from "react";
import Course from "../Course/Course";
import js from "../../images/js.png";
import c from "../../images/C#.png";
import scss from "../../images/scss.png";
import react from "../../images/react.png";
import bootstrap from "../../images/bootstrap.png";
import java from "../../images/java.png";
import python from "../../images/python.png";
import angular from "../../images/angular.png";

import styled from "styled-components";
const Container = styled.div`
  padding: 60px;
`;
const Courses = () => {
  const [data, setData] = useState([
    { id: 1, title: "دوره جاوااسکریپت", image: js, progress: 60 },
    { id: 2, title: "دوره سی شارپ #C", image: c, progress: 40 },
    { id: 3, title: "دوره scss", image: scss, progress: 20 },
    { id: 4, title: "دوره ری اکت", image: react, progress: 70 },
    { id: 5, title: "دوره بوت استرپ", image: bootstrap, progress: 50 },
    { id: 6, title: "دوره جاوا", image: java, progress: 90 },
    { id: 7, title: "دوره پایتون", image: python, progress: 10 },
    { id: 8, title: "دوره انگولار", image: angular, progress: 100 },
  ]);

  return (
    <Container>
      {data.map((course) => (
        <Course
          key={course.id}
          title={course.title}
          image={course.image}
          progress={course.progress}
        />
      ))}
    </Container>
  );
};

export default Courses;
