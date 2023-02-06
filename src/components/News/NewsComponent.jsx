import {
  Container,
  RightContainer,
  RightHeadline,
  RightText,
  RightButton,
  LeftContainer,
  LeftText,
  LeftFigureCaption,
  LeftFigure,
  LeftImage,
  LeftPagination,
  LeftButton,
} from "./StyleNewsComponent.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

import articleImage from "../../images/homePage/articleImage.png";
import backButton from "../../images/homePage/backButton.png";
import nextButton from "../../images/homePage/nextButton.png";
const newsData = [
  {
    newsImage: articleImage,
    newsDetails: " مقایسه ری اکت با فریمورک های جدید جاوا اسکریپت",
  },
];

const News = () => {
  return (
    <>
      <Container>
        <RightContainer>
          <RightHeadline>اخبار و مقالات</RightHeadline>
          <RightText>
            دسترسی به جدید ترین و مفید ترین مقالات تالیف شده توسط معتبر ترین
            روزنامه ها و رسانه ها ، در دسته بندی های گوناگونی همچون طراحی ، هنر
            ... برنامه نویسی ، اقتصاد، فلسفه ، فیزیک ، شیمی و
          </RightText>
          <RightButton>مشاهده مقالات</RightButton>
        </RightContainer>

        <LeftContainer>
          <Swiper
            className={"newsSwiper"}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            modules={[Navigation]}
            loop={true}
          >
            {newsData.map((data, index) => (
              <SwiperSlide key={index}>
                <LeftFigure>
                  <LeftImage src={data.newsImage} alt="Article Images" />
                  <LeftFigureCaption>
                    <LeftText>{data.newsDetails}</LeftText>
                  </LeftFigureCaption>
                </LeftFigure>
              </SwiperSlide>
            ))}
            <LeftPagination>
              <LeftButton className="prev" src={backButton} alt="Paginaition" />
              <LeftButton className="next" src={nextButton} alt="Paginaition" />
            </LeftPagination>
          </Swiper>
        </LeftContainer>
      </Container>
    </>
  );
};

export default News;
