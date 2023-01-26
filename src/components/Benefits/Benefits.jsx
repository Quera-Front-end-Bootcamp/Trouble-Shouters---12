import styled from "styled-components";
import benefits from "../../images/ProductPage/benefits.png";
import learning from "../../images/ProductPage/online-learning.png";

const Container = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  color: var(--main-color);
  background-color: #f9f9f9;
`;
const RightPic = styled.div`
  background-image: url(${benefits});
  height: 100%;
  width: 35%;
  position: absolute;
  right: 0;
  top: 0;
`;
const Des = styled.div`
  margin-bottom: 45px;
  display: flex;
`;
const All = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 50px;
`;
const Title = styled.div`
  font-size: 28px;
  margin-bottom: 40px;
`;
const Pic = styled.div`
  background-image: url(${learning});
  height: 25px;
  width: 25px;
`;

const Benefits = () => {
  return (
    <>
      <Container>
        <RightPic />
        <All>
          <Title> مزایای این دوره:</Title>
          <Des>
            <img src={learning} alt='' style={{height:'30px',marginLeft:'10px'}}/>
            آشنایی با زبان برنامه نویسی جاوااسکریپت در پایان این دوره ی آموزشی ،
            شما دانشجوی گرامی ، قادر به فهمی عمیق و مناسب نسبت به این زبان
            خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد
          </Des>
          <Des>
          <img src={learning} alt='' style={{height:'30px',marginLeft:'10px'}}/>
            آشنایی با زبان برنامه نویسی جاوااسکریپت در پایان این دوره ی آموزشی ،
            شما دانشجوی گرامی ، قادر به فهمی عمیق و مناسب نسبت به این زبان
            خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد
          </Des>
          <Des>
          <img src={learning} alt='' style={{height:'30px',marginLeft:'10px'}}/>
            آشنایی با زبان برنامه نویسی جاوااسکریپت در پایان این دوره ی آموزشی ،
            شما دانشجوی گرامی ، قادر به فهمی عمیق و مناسب نسبت به این زبان
            خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد
          </Des>
        </All>
      </Container>
    </>
  );
};

export default Benefits;
