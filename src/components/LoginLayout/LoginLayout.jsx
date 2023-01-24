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
  const socialIcon = [youtube, whatsApp, telegram, insatgram];

  return (
    <Container imgUrl={imgUrl}>
      <HeadLineIcon src={secondBamboo} alt="bamboo" display={"none"} />
      <Headline>
        آکادمی آموزشی بامبو
        <HeadLineIcon src={firstBamboo} alt="bamboo" />
      </Headline>
      <Hr />
      <SocialIcons>
        {socialIcon.map((icon) => (
          <SocialIcon src={icon} alt={icon} />
        ))}
      </SocialIcons>
      <SocialIcons />
      <HomeIcon src={home} alt="home" />
    </Container>
  );
};
export default Layout;
