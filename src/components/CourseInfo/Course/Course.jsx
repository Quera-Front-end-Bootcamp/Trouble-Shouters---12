import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  Section,
  Container,
  InfoCourse,
  CourseImg,
  Border,
} from "./CourseStyle";
// import Js from "../../images/js.png";

const Course = ({ id, title, image, progress }) => {
  return (
    <Section>
      <Container>
        <InfoCourse>
          <h3 className="course-title">{title}</h3>
          <p className="course-master">مدرس : بیل گتس</p>
          <p className="course-capacity"> ظرفیت: ۵۹ نفر</p>
          <p className="course-start">تاریخ شروع : ۱۴۰۰/۱/۱ </p>
          <p className="course-end">تاریخ پایان : ۱۴۰۰/۱/۱ </p>
          <p className="course-cost">
            قیمت: <span>۲۰۰،۰۰۰ تومان </span>{" "}
          </p>
          <div className="course-status">
            <span>وضعیت دوره:</span>

            <div className="progress">
              <ProgressBar
                progress={progress}
                completed={progress}
                barContainerClassName="container"
                completedClassName="barCompleted"
              />
            </div>
          </div>
        </InfoCourse>
        <CourseImg>
          <img src={image} alt="" />
        </CourseImg>
        <Border />
        <button>مشاهده کامل</button>
      </Container>
    </Section>
  );
};

export default Course;
