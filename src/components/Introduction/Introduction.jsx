import React from "react";
import StudentMan from "../../images/homePage/StudentMan.png";
import BusinessModernClassRoom from "../../images/homePage/BusinessModernClassRoom.png";
import BusinessPeople from "../../images/homePage/BusinessPeople.png";
import { Consultation, Certification, Assist } from "./StyleIntroduction";

const Introduction = () => {
  return (
    <>
      <Consultation>
        <h2>
          مشاوره آنلاین <p> مشاوران ما برای حل مشکلات شما آماده اند...</p>
        </h2>
        <div>
          <button>مشاوره</button>
          <img src={BusinessPeople} />
        </div>
      </Consultation>
      <Certification>
        <img src={StudentMan} />
        <h2>
          ارائه مدرک معتبر<p>بهترین راه برای ساختن رزومه حرفه ای...</p>
        </h2>
      </Certification>

      <Assist>
        <h2>
          همکاری در آموزش<p> به اساتید آموزشی ما در بامبو بپیوندید ...</p>
        </h2>
        <img src={BusinessModernClassRoom} />
      </Assist>
    </>
  );
};

export default Introduction;
