import {
  Container,
  NotFoundHeader,
  NotFoundGif,
  NotFoundButton,
} from "./StyleNotFound";

const NotFound = () => {
  return (
    <Container>
      <NotFoundHeader>404</NotFoundHeader>
      <NotFoundGif></NotFoundGif>
      <NotFoundButton>صفحه اصلی</NotFoundButton>
    </Container>
  );
};

export default NotFound;
