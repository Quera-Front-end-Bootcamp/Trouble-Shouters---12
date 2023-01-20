import React from "react";
import styled from "styled-components";
import samandehi from "../../images/homePage/samandehi.png";
import etehadie from "../../images/homePage/etehadie.png";
import enamad from "../../images/homePage/enamad.png";
import {
  Container,
  ContainerFirst,
  AboutUs,
  AboutUsTitle,
  AboutUsDec,
  NewsTeller,
  NewsTellerTitle,
  NewsTellerContainer,
  NewsTellerInput,
  NewsTellerButton,
  ContainerSecond,
  ContactUs,
  ContactUsTitle,
  ContactUsEmail,
  ContactUsIcons,
  ContactUsIcon,
  ComeWithUS,
  ComeWithUSTitle,
  ComeWithUSItem,
  Icons,
  Icon,
  ContainerThird,
} from "./StyleFooterComponents";

const FooterComponents=()=> {
  return (
    <Container>
      <ContainerFirst>
        <AboutUs>
          <AboutUsTitle>درباره بامبو</AboutUsTitle>
          <AboutUsDec>
            بامبو یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران
            است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و
            دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد
          </AboutUsDec>
        </AboutUs>
        <NewsTeller>
          <NewsTellerTitle>خبرنامه</NewsTellerTitle>
          <NewsTellerContainer>
            <NewsTellerInput placeholder="  ایمیل خود را وارد کنید ..." />
            <NewsTellerButton>عضویت</NewsTellerButton>
          </NewsTellerContainer>
        </NewsTeller>
      </ContainerFirst>
      <ContainerSecond>
        <ContactUs>
          <ContactUsTitle>ارتباط با ما</ContactUsTitle>
          <ContactUsEmail>iwillbemyvision@gmail.com</ContactUsEmail>
          <ContactUsEmail>iwillbemyvision@gmail.com</ContactUsEmail>
          <ContactUsIcons>{/* react icon */}</ContactUsIcons>
        </ContactUs>
        <ComeWithUS>
          <ComeWithUSTitle>همراه باشید</ComeWithUSTitle>
          <ComeWithUSItem>سوالات رایج</ComeWithUSItem>
          <ComeWithUSItem>قوانین</ComeWithUSItem>
          <ComeWithUSItem>خدمات</ComeWithUSItem>
        </ComeWithUS>
        <Icons>
          <Icon src={etehadie}></Icon>
          <Icon src={samandehi}></Icon>
          <Icon src={enamad}></Icon>
        </Icons>
      </ContainerSecond>

      <ContainerThird>
        کليه حقوق محصولات و محتوای اين سایت متعلق به بامبو می باشد و هر گونه کپی
        برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست
      </ContainerThird>
    </Container>
  );
}

export default FooterComponents;
