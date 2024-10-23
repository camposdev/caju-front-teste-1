import TextField from "~/components/TextField";
import Button from "~/components/Button";
import { HiOutlineArrowLeft } from "react-icons/hi";
import IconButton from "~/components/IconButton";
import { useNavigate } from "react-router-dom";
import routes from "~/router/routes";
import * as S from "./styles";

const NewUserPage = () => {
  const navigate = useNavigate();

  return (
    <S.Card>
      <IconButton size="small" onClick={() => navigate(routes.dashboard)} aria-label="back">
        <HiOutlineArrowLeft size={24} />
      </IconButton>

      <S.Form>
        <TextField id="name" placeholder="Nome" label="Nome" />
        <TextField id="email" placeholder="Email" label="Email" type="email" />
        <TextField id="cpf" placeholder="CPF" label="CPF" />
        <TextField id="date" label="Data de admissão" type="date" />
      </S.Form>

      <Button onClick={() => {}}>Cadastrar</Button>
    </S.Card>
  );
};

export default NewUserPage;
