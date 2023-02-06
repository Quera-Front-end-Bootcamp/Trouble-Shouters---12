import axios from "axios";
import React, { useEffect, useState } from "react";
import CoursesListV2 from "./CoursesListV2";
import Pagination from "./Pagination";
import styled from "styled-components";
import HeaderCourse from "./HeaderCourse";
import "./active.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e9e9e9;
  padding: 0 10rem;
  padding-bottom: 4rem;
  @media (max-width: 480px) {
    padding: 0 1rem;
    padding-bottom: 2rem;
  }
`;
const Title = styled.div`
  font-size: 30px;
  color: var(--main-color);
`;
const TitleContainer = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 2rem;
  @media (max-width: 480px) {
    padding: 3rem 0;
    flex-direction: column;
  }
`;
const Filter = styled.button`
  border: none;
  color: var(--main-color);
  background-color: #e9e9e9;
  padding: 8px 10px;
  cursor: pointer;
`;

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
