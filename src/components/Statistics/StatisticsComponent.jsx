import React from "react";
import CoursesIcon from "../../images/homePage/Courses.png";
import DeskIcon from "../../images/homePage/Desk.png";
import HatIcon from "../../images/homePage/Hat.png";
import {
  StatisticsBackground,
  MainStatistics,
} from "./StyleStatisticsComponent";
import Banner from "../../images/homePage/Class.png";

const Statistics = () => {
  return (
    <>
      <StatisticsBackground>
        <img src={Banner} />
      </StatisticsBackground>
      <MainStatistics>
        <div>
          <img src={HatIcon} alt="" srcset="" />
          <h2>576 دانشجو</h2>
          <p>
            تا کنون بیش از 500 نفر از آموزش های بامبو استفاده کرده اند .و نظرات
            خودشونو ثبت کرده اند
          </p>
        </div>
        <div>
          <img src={DeskIcon} alt="" srcset="" />
          <h2>34 استاد</h2>
          <p>
            بیش از 30 استاد ، از برترین اساتید ایران همراه ما هستند .و دوره های
            خودشونو ثبت کرده اند
          </p>
        </div>
        <div>
          <img src={CoursesIcon} alt="" srcset="" />
          <h2>219 دوره</h2>
          <p>
            تا کنون بیش از 200 دوره ، از دسته بندی های متفاوت .در سایت ثبت شده و
            قابل دسترسی است
          </p>
        </div>
      </MainStatistics>
    </>
  );
};

export default Statistics;
