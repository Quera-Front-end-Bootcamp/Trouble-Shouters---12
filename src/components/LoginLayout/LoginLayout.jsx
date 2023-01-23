import {
  HomeIcon,
  Hr,
  HeadLineIcon,
  Container,
  Headline,
  SocialIcons,
  SocialIcon,
} from "./StyleLoginLayout";
import firstBamboo from "../../images/loginPage/bamboo-d2.png";
import secondBamboo from "../../images/loginPage/bamboo-c.png";
import home from "../../images/loginPage/home.png";
import whatsApp from "../../images/loginPage/whatsapp.png";
import telegram from "../../images/loginPage/telegram.png";
import youtube from "../../images/loginPage/youtube.png";
import insatgram from "../../images/loginPage/instagram.png";

const Layout = ({ imgUrl }) => {
  return (
    <Container imgUrl={imgUrl}>
      <HeadLineIcon src={secondBamboo} alt="bamboo" display={"none"} />
      <Headline>
        آکادمی آموزشی بامبو
        <HeadLineIcon src={firstBamboo} alt="bamboo" />
      </Headline>
      <Hr />
      <SocialIcons>
        <SocialIcon src={youtube} alt="whatsApp" />
        <SocialIcon src={whatsApp} alt="whatsApp" />
        <SocialIcon src={telegram} alt="whatsApp" />
        <SocialIcon src={insatgram} alt="whatsApp" />
      </SocialIcons>
      <SocialIcons />
      <HomeIcon src={home} alt="home" />
    </Container>
  );
};
export default Layout;
