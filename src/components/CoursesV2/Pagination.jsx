import styled from "styled-components";
import "./active.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  gap: 0.5rem;
  button {
    border: none;
    padding: 10px 10px;
    color: var(--main-color);
  }
`;
const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
  prevPage,
  nextPage,
}) => {
  let pages = [];
  let current = currentPage;
  for (let i = Math.ceil(totalPosts / postsPerPage); i >= 1; i--) {
    pages.push(i);
  }
  console.log();
  return (
    <Container>
      <button
        onClick={(e) => nextPage()}
        // className={page == currentPage ? "active" : ""}
      >
        &#60;
      </button>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={(e) => prevPage()}
        // className={page == currentPage ? "active" : ""}
      >
        &#62;
      </button>
    </Container>
  );
};

export default Pagination;
