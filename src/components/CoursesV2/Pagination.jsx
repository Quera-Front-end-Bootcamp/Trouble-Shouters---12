import styled from "styled-components";
import './active.css'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 4rem;
gap: .5rem;
  button{
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
}) => {
  let pages = [];

  for (let i = Math.ceil(totalPosts / postsPerPage); i >=1 ; i--) {
    pages.push(i);
  }

  return (
    <Container>
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
    </Container>
  );
};

export default Pagination;
