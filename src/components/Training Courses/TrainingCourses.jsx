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
    All: true,
    news: false,
    expensive: false,
    Done: false,
  });

  const allCourseHandeler = () => {
    setData(CoursesApi);
    setActive({
      All: true,
      news: false,
      expensive: false,
      Done: false,
    });
  };
  const expensiveHandeler = () => {
    const result = data.filter((course) => course.expenxive === true);

    setData(result);
    setActive({
      All: false,
      news: false,
      expensive: true,
      Done: false,
    });
  };

  const newsestHandeler = () => {
    const result = data.filter((course) => course.newest === true);

    setData(result);
    setActive({
      All: false,
      news: true,
      expensive: false,
      Done: false,
    });
  };

  const doneHandeler = () => {
    const result = data.filter((course) => course.done === true);

    setData(result);
    setActive({
      All: false,
      news: false,
      expensive: false,
      Done: true,
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
              className={active.All === true ? "active" : ""}
              onClick={() => allCourseHandeler()}
            >
              همه دوره ها
            </button>
            <button
              className={active.news === true ? "active" : ""}
              onClick={() => newsestHandeler()}
            >
              جدیدترین ها
            </button>
            <button
              className={active.expensive === true ? "active" : ""}
              onClick={() => expensiveHandeler()}
            >
              گران ترین ها
            </button>
            <button
              className={active.Done === true ? "active" : ""}
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
