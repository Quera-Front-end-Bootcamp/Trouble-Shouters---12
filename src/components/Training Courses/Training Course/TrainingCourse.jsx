import React from "react";
import styled from "styled-components";
import Js from "../../../images/courseInfo/js.png";

const CardContainer = styled.div`
  display: flex ;
  justify-content: space-evenly ;
  flex-wrap:wrap ;

`
const Card = styled.div`
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
    button{
      padding: 2px;
      border: none;
      background-color: #004458;
      color: #fff;
      cursor: pointer;
    }
  }
.border{
    border: 1px solid #fff;
    width: 90%;
   margin: 0 auto;
}
.price{
padding: 10px;
text-align: left;
}

`;


const TrainingCourse = ({ id, image, progress , posts }) => {

  return (
    <CardContainer className='alfa'>
    {posts.map(post => (
        <Card>
        <img src={post.image} alt="" />
        <div className="info">
          <h3>دوره جاوااسکریپت</h3>
          <p className="tuter">مدرس : بیل گیتس</p>
          <div className="capacity">
            <p>ظرفیت 59 نفر</p>
            <button>جزئیات</button>
          </div>
        </div>
        <div className="border" />
        <div className="price"> 200000 تومان</div>
      </Card>
    ))}
  </CardContainer>
  );
};

export default TrainingCourse;
