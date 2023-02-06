import {Container,RightDet,RightDetTitle,RightDetDec,LeftDet,LeftDetTitle,LeftDetPrice,LeftDetDiscount,LeftDetTotal,LeftDetTimer,LeftDetButton,Lines,Title,TitleCross,} from './StyledProductDetails'


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
