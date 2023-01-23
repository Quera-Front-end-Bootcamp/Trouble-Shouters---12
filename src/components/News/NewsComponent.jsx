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

import articleImage from "../../images/homePage/articleImage.png";
import backButton from "../../images/homePage/backButton.png";
import nextButton from "../../images/homePage/nextButton.png";

const News = () => {
  return (
    <>
      <Container>
        <RightContainer>
          <RightHeadline>اخبار و مقالات</RightHeadline>
          <RightText>
            دسترسی به جدید ترین و مفید ترین مقالات تالیف شده توسط معتبر ترین
            روزنامه ها و رسانه ها ، در دسته بندی های گوناگونی همچون طراحی ، هنر
            ... برنامه نویسی ، اقتصاد، فلسفه ، فیزیک ، شیمی و{" "}
          </RightText>
          <RightButton>مشاهده مقالات</RightButton>
        </RightContainer>
        <LeftContainer>
          <LeftFigure>
            <LeftImage src={articleImage} alt="Article Images" />
            <LeftFigureCaption>
              <LeftText>
                مقایسه ری اکت با فریمورک های جدید جاوا اسکریپت
              </LeftText>
            </LeftFigureCaption>
          </LeftFigure>
          <LeftPagination>
            <LeftButton src={backButton} alt="Paginaition" />
            <LeftButton src={nextButton} alt="Paginaition" />
          </LeftPagination>
        </LeftContainer>
      </Container>
    </>
  );
};

export default News;
