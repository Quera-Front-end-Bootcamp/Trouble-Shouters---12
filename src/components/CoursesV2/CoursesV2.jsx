import axios from "axios";
import React, { useEffect, useState } from "react";
import CoursesListV2 from "./CoursesListV2";
import Pagination from "./Pagination";
import HeaderCourse from "./HeaderCourse";
import "./active.css";
import { Container, Title, TitleContainer, Filter } from "./StyledCourseV2";

const CoursesV2 = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [isActive, setActive] = useState(1);

  
  useEffect(() => {
    axios
      .get("https://63ba74b04482143a3f27f44a.mockapi.io/users")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  if (!data) return null;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  const totalPosts = data.length;

  const allHandler = () => {
    const copy = [...data].sort((a, b) => a.id - b.id);
    setData(copy);
    setActive(1);
  };
  const expensiverHandler = () => {
    const copy = [...data].sort((a, b) => b.Price - a.Price);
    setData(copy);
    setActive(2);
  };
  const cheaperHandler = () => {
    const copy = [...data].sort((a, b) => a.Price - b.Price);
    setData(copy);
    setActive(3);
    // console.log(data);
  };
  const nextPage = () => {
    if (currentPage >= totalPosts / postsPerPage) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage ==1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <HeaderCourse />
      <Container>
        <TitleContainer>
          <Title>دوره های اموزشی</Title>
          <div>
            <Filter
              onClick={allHandler}
              className={isActive == 1 ? "active" : null}
            >
              همه دوره ها
            </Filter>

            <Filter
              onClick={expensiverHandler}
              className={isActive == 2 ? "active" : null}
            >
              گران ترین ها{" "}
            </Filter>
            <Filter
              onClick={cheaperHandler}
              className={isActive == 3 ? "active" : null}
            >
              ارزان ترین ها
            </Filter>
          </div>
        </TitleContainer>
        <CoursesListV2 data={currentPosts} />
        <Pagination
          totalPosts={data.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </Container>
    </>
  );
};

export default CoursesV2;
