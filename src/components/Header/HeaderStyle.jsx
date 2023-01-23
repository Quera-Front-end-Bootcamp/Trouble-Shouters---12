import styled from "styled-components";
import headerImg from "../../images/header/brooke.png";
export const HeaderMain = styled.header`
  background-image: url(${headerImg});
  background-position: top center;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 1000px rgba(8, 133, 104, 0.8);
  width: 100%;
  height: 100vh;
`;
export const HeaderSite = styled.div`
  height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: 50% 50%;
  align-content: end;
  @media (max-width: 992px) {
    background-position: top center;
    background-repeat: no-repeat;
    /* height: 100vh; */
    grid-template-columns: 100%;
    align-content: center;
  }
  @media (max-width: 768px) {
    height: 88vh;
    background-position: top;
    background-repeat: no-repeat;
  }

  @media (max-width: 576px) {
    background-repeat: no-repeat;
  }
`;
export const Section = styled.div`
  padding: 20px;
  width: 100%;
  color: white;
  .title {
    h2 {
      font-size: 2.3rem;
      font-weight:bold;
      padding: 5px 35px;
    }
  }
  .info {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px 25px;
  }

  p {
    text-align: right;
    padding: 5px 0px;
    font-size: 1.1rem;
  }
  button {
    color: #004458;
    border: none;
    width: 160px;
    height: 70px;
    font-size: 1.1rem;
    cursor: pointer;
  }
  @media (max-width: 992px) {
    .title {
      h2 {
        text-align: center;
      }
    }
    .info {
      flex-direction: column;
      .introduction {
        margin: 20px 0;
        p {
          font-size: 1.8rem;
        }
      }
    }
    button {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 768px) {
    .title {
      h2 {
        font-size: 2rem;
      }
    }
    .info {
      flex-direction: column;
      .introduction {
        margin: 20px 0;
        p {
          font-size: 1.4rem;
        }
      }
    }
  }
  @media (max-width: 576px) {
    .title {
      h2 {
        font-size: 1.4rem;
        text-align:center
      }
    }
    .info {
      flex-direction: column;
      .introduction {
        margin: 20px 0;
        p {
          font-size: 1rem;
        }
      }
    }
  }
  @media (max-width: 278px) {
    .title {
      h2 {
        font-size: 1.5rem;
      }
    }
    .info {
      flex-direction: column;
      .introduction {
        margin: 20px 0;
        display: inline;
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
