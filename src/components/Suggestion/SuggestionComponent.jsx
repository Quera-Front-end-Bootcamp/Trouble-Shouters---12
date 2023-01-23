import {
  Container,
  SuggestionForm,
  SuggestionHeadLine,
  SuggestionInput,
  SuggestionButton,
} from "./StyleSuggestionComponent";

import suggestionImage from "../../images/homePage/suggestionImage.png";

const Suggestion = () => {
  return (
    <Container>
      <img src={suggestionImage} alt="Suggestion Images" />
      <SuggestionForm>
        <SuggestionHeadLine>پیشنهاد و انتقاد</SuggestionHeadLine>
        <SuggestionInput type="text" placeholder="ایمیل خود را وارد کنید ..." />
        <SuggestionInput type="text" placeholder="متن خود را وارد کنید ..." />
        <SuggestionButton>ارسال</SuggestionButton>
      </SuggestionForm>
    </Container>
  );
};
export default Suggestion;