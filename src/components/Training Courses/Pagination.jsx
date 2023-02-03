import React from "react";
import styled from "styled-components";
const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
  }
  li {
    margin: 0px 5px;
    cursor: pointer;
  }
  li a {
    text-decoration: none;
    color: #004458;
  }
`;
const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Nav>
      <ul className="pagination">
        <li>
          <a onClick={(e) => prevPage()}> prev </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
        <li>
          <a onClick={(e) => nextPage()}>next</a>
        </li>
      </ul>
    </Nav>
  );
};

export default Pagination;
