import styled from "styled-components";
const Container = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  position: relative;
  color: var(--main-color);
  @media (max-width: 480px) {
    flex-direction: column;
    height: 120vh;
  }
`;
const RightDet = styled.div`
  width: 60%;
`;
const RightDetTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
const RightDetDec = styled.div`
  text-align: justify;
  @media (max-width: 480px) {
    max-height: 40vh;
    text-overflow: ellipsis;
    display: block;
    overflow: hidden;
  }
`;
const LeftDet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  width: 300px;
  background-color: #ffffffe6;
  z-index: 1000;
`;
const LeftDetTitle = styled.div`
  border-bottom: 2px solid var(--main-color);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
`;
const LeftDetPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;
const LeftDetDiscount = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  color: #f20000;
`;
const LeftDetTotal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  color: #09b28b;
  font-weight: bold;
`;
const LeftDetTimer = styled.div``;
const LeftDetButton = styled.button`
  background-color: #09b28b;
  color: white;
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 16px;
`;
const Lines = styled.div`
  position: absolute;
  height: 300px;
  width: 310px;
  border: 3px solid #dbdbdb;
  top: 0;
  left: 0;
  @media (max-width: 480px) {
    display: none;
  }
`;
const Title = styled.div`
  color: var(--main-color);
`;
const TitleCross = styled.div`
  color: var(--main-color);
  text-decoration: line-through;
`;

const ProductDetails = () => {
  return (
    <>
      <Container>
        <RightDet>
          <RightDetTitle> توضیحات:</RightDetTitle>
          <RightDetDec>
            مروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است طراحی
            یک سایت به شکل مناسب و مورد پسند کاربران متفاوت اهمیت بالایی یافته
            است. به همین جهت صاحبان سرمایه و کار برای رونق کار خود به دنبال
            طراحان حرفه ای برای طراحی سایتی مناسب و کارآمد هستند. لذا یادگیری
            روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و
            کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت
            کلاینت است که می توان بوسیله سایتی مناسب و کارآمد هستند. لذا یادگیری
            روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و
            کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت
            کلاینت است که می توان بوسیله مروزه به دلیل آن که ارتباطات فضای مجازی
            رونق زیادی یافته است طراحی یک سایت به شکل مناسب و مورد پسند کاربران
            متفاوت اهمیت بالایی یافته است. به همین جهت صاحبان سرمایه و کار برای
            رونق کار خود به دنبال طراحان حرفه ای برای طراحی سایتی مناسب و کارآمد
            هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد توجه
            بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان
            برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله سایتی مناسب و
            کارآمد هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد
            توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت
            زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیل
          </RightDetDec>
        </RightDet>
        <LeftDet>
          <LeftDetTitle>دوره جاوا اسکریپت</LeftDetTitle>
          <LeftDetPrice>
            <Title> قیمت دوره:</Title>
            <TitleCross>200.000 تومان </TitleCross>
          </LeftDetPrice>
          <LeftDetDiscount>
            <Title> تخفیف:</Title>10 %
          </LeftDetDiscount>
          <LeftDetTotal>
            <Title> مبلغ قابل پرداخت:</Title>180.000 تومان
          </LeftDetTotal>
          <LeftDetTimer></LeftDetTimer>
          <LeftDetButton>ثبت نام در دوره</LeftDetButton>
        </LeftDet>
        <Lines />
      </Container>
    </>
  );
};

export default ProductDetails;
