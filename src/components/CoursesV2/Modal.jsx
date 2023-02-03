import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const AllContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  background-color: #fff;
  height: 50vh;
  width: 40vw;
  padding: 30px 40px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  color: var(--main-color);
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
`;
const Option = styled.div`
  color: var(--main-color);

  padding-top: 25px;
  display: flex;
  align-items: center;
`;
const OptionMargin=styled(Option)`
  margin-bottom: 20px;
`
const Price = styled.div``;
const Progress = styled.div`
  position: relative;
  height: 25px;
  width: 200px;
  background-color: #d4e0e3;
  margin-right: 20px;
  div {
    position: absolute;
    left: 0;
    height: 25px;
    background-color: #004458;
    width: ${({ percent }) => percent}%;
    color: #fff;
    text-align: end;
    padding-left: 10px;
  }
`;
const Pic = styled.div`
  width: 200px;
  height: 200px;
  img {
    width: 200px;
    height: 200px;
  }
`;
const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  border-top: 2px solid #dbdbdb;
  button {
    background-color: #dbdbdb;
    border: none;
    cursor: pointer;
    padding: 10px 10px;
    margin-top: 20px;
    color: var(--main-color);
    font-size: 14px;
    
  }
`;

const Modal = ({ id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://63ba74b04482143a3f27f44a.mockapi.io/users/${id}`)
      .then((response) => {
        setData(response.data);
        console.log(data);
      });
  }, []);
  return (
    <AllContainer>
      <ModalContainer>
        <Flex>
          <Container>
            <Title>{data.name}</Title>
            <Option> مدرس:{data.teacher}</Option>
            <Option>ظرفیت: {data.capacity}</Option>
            <Option>تاریخ شروع:{data.startDate}</Option>
            <Option>تاریخ پایان:{data.endDate}</Option>
            <Option>
              قیمت:
              <Price>{data.Price} تومان</Price>
            </Option>
          </Container>
          <Pic>
            <img src={data.picture} alt="" />
          </Pic>
        </Flex>
        <OptionMargin>
          وضعیت دوره:
          <Progress percent={data.percent * 10}>
            <div>{data.percent * 10}%</div>
          </Progress>
        </OptionMargin>
        <Button>
          {" "}
          <button>مشاهده کامل</button>
        </Button>
      </ModalContainer>
    </AllContainer>
  );
};

export default Modal;
