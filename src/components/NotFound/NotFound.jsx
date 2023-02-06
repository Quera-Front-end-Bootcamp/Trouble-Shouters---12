import { useNavigate } from "react-router-dom";
import { ROUTE_HOME_PAGE } from "../../Routes/Routes";
import {
  Container,
  NotFoundHeader,
  NotFoundGif,
  NotFoundButton,
} from "./StyleNotFound";

const NotFound = () => {
  const naviagte = useNavigate();
  const handleRedirect = () => {
    naviagte(ROUTE_HOME_PAGE);
  };

  return (
    <Container>
      <NotFoundHeader>404</NotFoundHeader>
      <NotFoundGif></NotFoundGif>
      <NotFoundButton onClick={handleRedirect}>صفحه اصلی</NotFoundButton>
    </Container>
  );
};

export default NotFound;
