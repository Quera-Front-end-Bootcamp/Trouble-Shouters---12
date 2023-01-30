import React from "react";
import { CardContainer, Card } from "./TrainingCourseStyle";

const TrainingCourse = ({ posts }) => {
  return (
    <CardContainer className="alfa">
      {posts.map((post) => (
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
