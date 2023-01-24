import {
  Container,
  SuggestionForm,
  SuggestionHeadLine,
  SuggestionInput,
  SuggestionButton,
  StyleImg,
} from "./StyleSuggestionComponent";

import suggestionImage from "../../images/homePage/suggestionImage.png";

const Suggestion = () => {
  return (
    <Container>
      <StyleImg src={suggestionImage} alt="Suggestion Images" />
      <SuggestionForm>
        <SuggestionHeadLine>پیشنهاد و انتقاد</SuggestionHeadLine>
        <SuggestionInput
          type="email"
          placeholder="ایمیل خود را وارد کنید ..."
        />
        <SuggestionInput type="text" placeholder="متن خود را وارد کنید ..." />
        <SuggestionButton>ارسال</SuggestionButton>
      </SuggestionForm>
    </Container>
  );
};
export default Suggestion;
