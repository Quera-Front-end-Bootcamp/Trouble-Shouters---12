import React from "react";
import styled from "styled-components";
import CourseCardV2 from "./CourseCardV2";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  /* align-items: center; */
`;

const CoursesListV2 = ({ coinsData }) => {
  return (
    <Container>
      {coinsData.map((coin, index) => {
        return (
          <CourseCardV2
            key={index}
            idF={coin.id}
            image={coin.picture}
            name={coin.name}
            price={coin.Price}
            teacher={coin.teacher}
            capacity={coin.capacity}
          />
        );
      })}
    </Container>
  );
};

export default CoursesListV2;
