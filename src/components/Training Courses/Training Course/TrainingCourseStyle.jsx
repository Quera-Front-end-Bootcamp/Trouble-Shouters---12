import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  width: 200px;
  height: 300px;
  background: #fff;
  position: relative;
  margin: 10px;
  img {
    width: 100%;
    height: 150px;
  }
  .info {
    padding: 10px;
  }
  .tuter {
    padding: 10px 0;
  }
  .capacity {
    display: flex;
    justify-content: space-between;
    button {
      padding: 2px;
      border: none;
      background-color: #004458;
      color: #fff;
      cursor: pointer;
    }
  }
  .border {
    border: 1px solid #fff;
    width: 90%;
    margin: 0 auto;
  }
  .price {
    padding: 10px;
    text-align: left;
  }
`;
