import axios from "axios";
import React, { useEffect, useState } from "react";
import CoursesListV2 from "./CoursesListV2";
import Pagination from "./Pagination";
import HeaderCourse from "./HeaderCourse";
import "./active.css";
import {Container,Title,TitleContainer,Filter} from './StyledCourseV2'


const CoursesV2 = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [isActive, setActive] = useState(1);

  useEffect(() => {
    axios
      .get("https://63ba74b04482143a3f27f44a.mockapi.io/users")
      .then((response) => {
        setCoinsData(response.data);
      });
  }, []);

  if (!coinsData) return null;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);
  const allHandler = () => {
    const copy = [...coinsData].sort((a, b) => a.id - b.id);
    setCoinsData(copy);
    setActive(1);
  };
  const expensiverHandler = () => {
    const copy = [...coinsData].sort((a, b) => b.Price - a.Price);
    setCoinsData(copy);
    setActive(2);
  };
  const cheaperHandler = () => {
    const copy = [...coinsData].sort((a, b) => a.Price - b.Price);
    setCoinsData(copy);
    setActive(3);
    // console.log(coinsData);
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
        <CoursesListV2 coinsData={currentPosts} />
        <Pagination
          totalPosts={coinsData.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Container>
    </>
  );
};

export default CoursesV2;
