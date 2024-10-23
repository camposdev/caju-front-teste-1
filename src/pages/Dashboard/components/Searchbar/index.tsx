import { HiRefresh } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Button from "~/components/Button";
import IconButton from "~/components/IconButton";
import TextField from "~/components/TextField";
import routes from "~/router/routes";
import * as S from "./styles";

export const SearchBar = () => {
  const navigate = useNavigate();
  
  return (
    <S.Container>
      <TextField id="cpf" placeholder="Digite um CPF válido" />

      <S.Actions>
        <IconButton size="large" aria-label="refetch">
          <HiRefresh />
        </IconButton>

        <Button size="large" block onClick={() => navigate(routes.newUser)}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
