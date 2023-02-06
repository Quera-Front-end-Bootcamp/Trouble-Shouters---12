import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchContainer } from "./SearchStyle";

function Search() {
  return (
    <SearchContainer>
      <a href="#">
        <i>
          {" "}
          <AiOutlineSearch className="search-icon" size={25} />
        </i>
        جستجو ...
      </a>
    </SearchContainer>
  );
}
export default Search;
