import styled from "styled-components";
import "./active.css";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
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
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  console.log();
  return (
    <Container>
      <button
        onClick={() => prevPage()}
      >
        &#62;
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
        onClick={() => nextPage()}
      >
        &#60;
      </button>
    </Container>
  );
};

export default Pagination;
