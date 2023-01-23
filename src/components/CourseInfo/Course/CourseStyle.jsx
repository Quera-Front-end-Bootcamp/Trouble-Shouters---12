import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;

  padding: 15px;
  width: 400px;
  height: 400px;
  background-color: #fff;

  button {
    position: absolute;
    top: 348px;
    left: 17px;
    border: none;
    width: 110px;
    height: 40px;
    font-size: 1.1rem;
    color: #004458;
  }
`;
export const CourseImg = styled.div`
  img {
    width: 100%;
  }
`;
export const InfoCourse = styled.div`
  padding: 5px;
  .course-title {
    font-size: 1.1rem;
    padding: 5px;
    margin-bottom: 10px;
    color: #004458;
  }
  .course-master,
  .course-capacity,
  .course-start,
  .course-end,
  .course-cost {
    font-size: 1rem;
    padding: 5px;
    margin-bottom: 20px;
    color: #004458;
    span {
      color: #09b28b;
    }
  }
  .course-status {
    width: 400px;

    padding: 5px;
    display: flex;

    color: #004458;
    .progress {
      margin-right: 10px;
    }
    .container {
      width: 150px;
      background-color: #d4e0e3;
    }
    .barCompleted {
      background-color: #004458;
      width: 60%;
    }
  }
`;

export const Border = styled.div`
  position: absolute;
  top: 338px;
  right: 23px;
  border-bottom: 3px solid rgba(0, 68, 88, 0.5);
  width: 90%;
  margin-bottom: 70px;
`;
