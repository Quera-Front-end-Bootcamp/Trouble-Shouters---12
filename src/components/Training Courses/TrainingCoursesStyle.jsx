import styled from "styled-components";

export const Container = styled.div`
  /* background-color: orange; */
  padding: 10px;
  margin: 0 auto;
  width: 1000px;
  .AllCourse{
    display: flex;
    justify-content: space-between;
  }
  h2{
    color: #004458;
    padding: 0 20px;
    margin: 5px 0;
    font-weight: bold;
  }
  .filter-course {
    padding: 0 25px;
    margin: 5px 0;
  }
  .filter-course > button{
    padding: 5px;
    border: none;
    margin: 0 5px;
    background-color: #DBDBDB;
    color: #fff;
    cursor: pointer;
  }
  .filter-course > button.active{
    background-color: #004458;
  }
  .courses {
    /* background-color: bisque; */
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-evenly;
  }
  .course {
    margin: 15px;
  }
`;