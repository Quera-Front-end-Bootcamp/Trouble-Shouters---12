import styled from "styled-components";
import StudentManRes from "../../images/homePage/StudentManRes.png";
import BusinessModernClassRoomRes from "../../images/homePage/BusinessModernClassRoomRes.png";
import BusinessPeopleRes from "../../images/homePage/BusinessPeopleRes.png";

export const Consultation = styled.div`
  margin-bottom: -4px;
  background-color: #004458;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    background-image: url(${BusinessPeopleRes});
    background-size: 100vw auto;
    height: 15vh;
    flex-direction: row;
    align-items: center;
  }
  button {
    cursor: pointer;
    text-align: center;
    z-index: 1;
    position: absolute;
    width: 9vw;
    height: 6vh;
    margin: 7% 20%;
    opacity: 80%;
    @media (max-width: 768px) {
      width: 20vw;
      height: 4vh;
      margin: 40px;
      position: relative;
    }
  }
  img {
    margin: 0px;
    position: relative;
    width: 40vw;
    left: 0vw;
    @media (max-width: 768px) {
      display: none;
    }
  }
  h2 {
    color: #fff;
    margin: 0% 3%;
    font-size: 1.5rem;
    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 5%;
      color: #000000;
    }
    p {
      padding-top: 20px;
      font-size: 1rem;
      font-weight: normal;
      @media (max-width: 768px) {
        font-size: 0.8rem;
        font-weight: bold;
        color: #000;
      }
    }
  }
`;

export const Certification = styled.div`
  margin: 0px;
  background-image: linear-gradient(to right, #004458, #08a987);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    background-image: url(${StudentManRes});
    background-size: 100vw auto;
    height: 15vh;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  img {
    margin: 0px;
    position: relative;
    width: 40vw;
    left: 0vw;
    @media (max-width: 768px) {
      display: none;
    }
  }
  h2 {
    color: #fff;
    margin: auto;
    font-size: 1.5rem;
    @media (max-width: 768px) {
      font-size: 1rem;
      margin: 0px;
      padding: 5%;
      color: #000000;
    }
    p {
      padding-top: 20px;
      font-size: 1rem;
      font-weight: normal;
      @media (max-width: 768px) {
        font-size: 0.8rem;
        font-weight: bold;
        color: #000;
      }
    }
  }
`;

export const Assist = styled.div`
  margin: 0px;
  background-color: #004458;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    background-image: url(${BusinessModernClassRoomRes});
    height: 15vh;
    background-size: 100vw auto;
    flex-direction: row;
    align-items: center;
  }
  button {
    cursor: pointer;
    text-align: center;
    z-index: 1;
    position: absolute;
    width: 9vw;
    height: 6vh;
    margin: 7% 20%;
    opacity: 80%;
    @media (max-width: 768px) {
      width: 20vw;
      height: 6vh;
      margin: 40px;
      position: relative;
    }
  }
  img {
    margin: 0px;
    position: relative;
    width: 40vw;
    left: 0vw;
    @media (max-width: 768px) {
      display: none;
    }
  }
  h2 {
    color: #fff;
    margin: 0% 3%;
    font-size: 1.5rem;
    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 5%;
      color: #000000;
    }
    p {
      padding-top: 20px;
      font-size: 1rem;
      font-weight: normal;
      @media (max-width: 768px) {
        font-size: 0.8rem;
        font-weight: bold;
        color: #000;
      }
    }
  }
`;
