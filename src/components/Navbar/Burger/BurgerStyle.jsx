import styled from "styled-components";
export const NavbarComponent = styled.div`
  @media (max-width: 768px){
    display: flex;
    align-items: center;
  }

`
export const Div = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 12px;
  left: 30px;
  z-index: 20;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    position: absolute;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${(props) => (props.open ? "#fff" : "#1565df")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3 linear;
    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
      background: #fff;
    }
    &:nth-child(2) {
      transform: ${(props) =>
        props.open ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${(props) => (props.open ? 0 : 1)};
      background: #fff;
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
      background: #fff;
    }
  }
`;
