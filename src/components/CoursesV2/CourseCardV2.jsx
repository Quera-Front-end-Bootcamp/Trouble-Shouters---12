import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 14vw;
  background-color: #fff;
  color: var(--main-color);
`;
const Title = styled.div`
  text-align: start;
  width: 100%;
  padding: 0 10px 5px 10px;
  font-size: 20px;
  font-weight: bold;
`;
const Img = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 150px;
  }
`;

const Teacher = styled.div`
  text-align: start;
  width: 100%;
  padding: 0 16px 5px 16px;
`;
const Des = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 16px 8px 16px;
  align-items: center;
`;
const All = styled.div``;
const More = styled.button`
  background-color: var(--main-color);
  border: none;
  color: #fff;
  padding: 5px 8px;
  cursor: pointer;
`;
const Price = styled.div`
  padding: 7px 16px 12px 16px;
  margin: 0 7px;
  border-top: 2px solid #bcbcbc;
  text-align: end;
  width: 90%;
  color: #09b28b;
`;
const CourseCardV2 = ({ image, name, price, teacher, capacity ,idF}) => {
  const [activeModal,setActiveModal]=useState()
  const modalHandler = (id) => {
    setActiveModal(id); 
    console.log(id);
  };

  return (
    <>
      <Container>
        <Img>
          <img src={image} alt={name} />
        </Img>
        <Title>دوره {name}</Title>
        <Teacher>مدرس: {teacher}</Teacher>
        <Des>
          <All>ظرفیت {capacity} نفر</All>
          <More onClick={()=>modalHandler(idF)}> جزییات</More>
        </Des>
        <Price>{price.toLocaleString()} تومان</Price>
      </Container>
      {idF==activeModal?<Modal id={activeModal}/> : ''}
      
    </>
  );
};

export default CourseCardV2;
