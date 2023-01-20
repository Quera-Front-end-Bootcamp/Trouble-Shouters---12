import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #004458;
  display: flex;
  flex-direction: column;
  color: #fff;
`;
export const ContainerFirst = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d1d1d1;
  margin: 60px;
  margin-top: 40px;
  padding-bottom: 60px;
`;
export const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
export const AboutUsTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
export const AboutUsDec = styled.div`
  color: #dbdbdb;
`;
export const NewsTeller = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-right: 100px;
`;
export const NewsTellerTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
export const NewsTellerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const NewsTellerInput = styled.input`
  outline: none;
  border: none;
  background-color: #003544;
  height: 40px;
  padding: 0 30px 0 70px;
  font-size: 16px;
  color: white;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #415d65;
  }
  :-ms-input-placeholder {
    color: #415d65;
  }
`;
export const NewsTellerButton = styled.button`
  outline: none;
  border: none;
  background-color: #002b37;
  color: #09b28b;
  padding: 0 12px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const ContainerSecond = styled.div`
  margin: 0 60px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 60px;
`;
export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContactUsTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
export const ContactUsEmail = styled.div`
  margin-bottom: 0.25rem;
  color: #dbdbdb;
`;
export const ContactUsIcons = styled.div``;
export const ContactUsIcon = styled.div`
  cursor: pointer;
  color: #dbdbdb;
`;
export const ComeWithUS = styled.div``;
export const ComeWithUSTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
export const ComeWithUSItem = styled.div`
  margin-bottom: 0.25rem;
  color: #dbdbdb;
  cursor: pointer;
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
export const Icon = styled.img`
  background-color: #fff;
  height: 100px;
  width: 100px;
  cursor: pointer;
`;

export const ContainerThird = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #003544;
  height: 70px;
`;
