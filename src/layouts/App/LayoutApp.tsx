import { Outlet } from "react-router-dom";
import Header from "~/components/Header";
import * as S from "./styles";

function LayoutApp() {
  return (
    <>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>

      <S.Container>
        <Outlet />
      </S.Container>
    </>
  );
}

export default LayoutApp;
