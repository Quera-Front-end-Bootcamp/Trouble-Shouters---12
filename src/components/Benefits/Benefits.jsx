import {Container,RightPic,Des,All,Title,Pic,} from './StyledBenefits'

import learning from "../../images/ProductPage/online-learning.png";


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
