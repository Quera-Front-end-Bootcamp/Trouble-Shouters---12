import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e9e9e9;
  padding: 0 10rem;
  padding-bottom: 4rem;
  @media (max-width: 480px) {
    padding: 0 1rem;
    padding-bottom: 2rem;
  }
`;
export const Title = styled.div`
  font-size: 30px;
  color: var(--main-color);
`;
export const TitleContainer = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 2rem;
  @media (max-width: 480px) {
    padding: 3rem 0;
    flex-direction: column;
  }
`;
export const Filter = styled.button`
  border: none;
  color: var(--main-color);
  background-color: #e9e9e9;
  padding: 8px 10px;
  cursor: pointer;
`;

