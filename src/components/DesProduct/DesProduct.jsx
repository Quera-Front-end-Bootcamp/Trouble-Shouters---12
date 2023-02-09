import Burger from "../Navbar/Burger/Burger";
import {
  HeaderMain,
  Container,
  Details,
  Logo,
  Title,
  Numbers,
  All,
  Number,
  ProgressBar,
  Progresser,
  Boxes,
  Box,
  BoxLogo,
  Line,
} from "./StyledDesProduct";
import js from "../../images/ProductPage/js.png";
import calendar from "../../images/ProductPage/calendar.png";
import like from "../../images/ProductPage/like.png";
import teachere from "../../images/ProductPage/teacher.png";
import star from "../../images/ProductPage/star.png";

const DesProduct = ({ name, teacher, startDate, endDate, percent }) => {
  return (
    <>
      <HeaderMain>
        <Burger />
        <Container>
          <Details>
            <Logo src={js} />
            <Title>{name}</Title>
            <Numbers>
              <All>ظرفیت : 60 نفر</All>
              <Number>دانشجو : 53 نفر</Number>
            </Numbers>
            <ProgressBar>
              <Progresser percent={percent}>{percent}%</Progresser>
            </ProgressBar>
          </Details>
          <Boxes>
            <Box>
              <img src={teachere} alt="" />
              <Line>: مدرس</Line>
              <Line>{teacher}</Line>
            </Box>
            <Box>
              <img src={calendar} alt="" />
              <Line>تاریخ شروع : {startDate}</Line>
              <Line>تاریخ پایان : {endDate}</Line>
            </Box>
            <Box>
              <img src={like} alt="" />
              <Line>رتبه :</Line>
              <Line>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </Line>
            </Box>
          </Boxes>
        </Container>
      </HeaderMain>
    </>
  );
};

export default DesProduct;
