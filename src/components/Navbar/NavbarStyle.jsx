import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  padding: 8px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
  }
`;
export const UL = styled.ul`
  list-style: none;
  display: flex;
  justify-content: right;
  margin: 20px 50px;
  z-index: 15;
  li {
    padding: 18px 30px;
  }
  li a {
    text-decoration: none;
    color: #fff;
  }
  .buttons-mobile {
    display: none;
  }
  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "block" : "none")};
    margin: 0;
    flex-direction: column;
    background: #004458;
    position: absolute;
    transition: all 0.3 liner;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    li {
      color: #fff;
      
    }
    .buttons-mobile {
      display: block;
    }
    .enter-mobile {
      padding: 10px 5px;
      width: 80px;
      height: 40px;
      margin: 15px 29px;
      /* display: flex;
      align-items: center;
      justify-content: center; */
    }
    .active-mobile {
      padding: 10px 5px;
      background-color: #12775E;
      width: 110px;
      height: 50px;
      margin: 30px 29px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export const Div = styled.div`
  color: #fff;
  div {
    display: flex;
  }
  .enter {
    margin-left: 15px;
  }
  .active {
    background-color: #004458;
    padding: 10px 20px;
    margin: 0 5px;
  }

  .ham-menu {
    display: none;
  }
  @media (max-width: 768px) {
    .ham-menu {
      display: block;
    }
    div {
      display: none;
    }
  }
`;

export const Border = styled.div`
  border-bottom: 0.5px solid white;
  width: 96%;
  margin: -35px auto;
  opacity: 0.7;
  @media (max-width: 768px) {
    display: none;
  }
`;
