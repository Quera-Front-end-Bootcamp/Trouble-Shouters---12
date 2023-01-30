import React, { useState } from "react";
import { Container } from "./TrainingCoursesStyle";
import TrainingCourse from "./Training Course/TrainingCourse";
import CoursesApi from "./CousesApi";
import Pagination from "./Pagination";

const TrainingCourses = () => {
  const [data, setData] = useState(CoursesApi);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [active, setActive] = useState({
    A: true,
    B: false,
    C: false,
    D: false,
  });

  const allCourseHandeler = () => {
    setData(CoursesApi);
    setActive({
      A: true,
      B: false,
      C: false,
      D: false,
    });
  };
  const expensiveHandeler = () => {
    const result = data.filter((course) => course.expenxive === true);

    setData(result);
    setActive({
      A: false,
      B: false,
      C: true,
      D: false,
    });
  };

  const newsestHandeler = () => {
    const result = data.filter((course) => course.newest === true);

    setData(result);
    setActive({
      A: false,
      B: true,
      C: false,
      D: false,
    });
  };

  const doneHandeler = () => {
    const result = data.filter((course) => course.done === true);

    setData(result);
    setActive({
      A: false,
      B: false,
      C: false,
      D: true,
    });
  };

  //  get current Course
  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const totalPosts = data.length;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
 
  const nextPage = () => {
    if (currentPage >= totalPosts / postsPerPage) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage >= totalPosts / postsPerPage) {
      setCurrentPage(1);
    } else {
      setCurrentPage(totalPosts / postsPerPage);
    }
  };

  return (
    <>
      <Container className="contianer">
        <div className="AllCourse">
          <h2>دوره های آموزشی</h2>
          <div className="filter-course">
            <button
              className={active.A === true ? "active" : ""}
              onClick={() => allCourseHandeler()}
            >
              همه دوره ها
            </button>
            <button
              className={active.B === true ? "active" : ""}
              onClick={() => newsestHandeler()}
            >
              جدیدترین ها
            </button>
            <button
              className={active.C === true ? "active" : ""}
              onClick={() => expensiveHandeler()}
            >
              گران ترین ها
            </button>
            <button
              className={active.D === true ? "active" : ""}
              onClick={() => doneHandeler()}
            >
              تکمیل نشده{" "}
            </button>
          </div>
        </div>
        <div className="courses">
          <TrainingCourse
            key={data.id}
            title={data.title}
            image={data.image}
            progress={data.progress}
            expensive={data.expenxive}
            posts={currentPosts}
          />
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </Container>
    </>
  );
};

export default TrainingCourses;
