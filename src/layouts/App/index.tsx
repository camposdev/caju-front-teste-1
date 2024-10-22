import { Outlet } from "react-router-dom";
import { Header } from "~/components/Header";

function LayoutApp() {
  return (
    <>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>

      <Outlet />
    </>
  );
}

export default LayoutApp;
