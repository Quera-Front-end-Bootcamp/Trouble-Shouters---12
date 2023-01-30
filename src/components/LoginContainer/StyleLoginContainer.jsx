import styled from "styled-components";

export const StyleContainer = styled.main`
  height: 100vh;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: ${(props) => props.flexDirection};
  }
`;
