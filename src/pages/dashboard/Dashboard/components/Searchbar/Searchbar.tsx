import { HiRefresh } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Button from "~/components/Button";
import IconButton from "~/components/IconButton";
import routes from "~/router/routes";
import * as S from "./styles";
import SearchCPF from "../SearchCPF";

type TProps = {
  onRefresh: VoidFunction
}

export const SearchBar = ({ onRefresh }: TProps) => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <SearchCPF />

      <S.Actions>
        <IconButton aria-label="Recarregar" onClick={onRefresh}>
          <HiRefresh />
        </IconButton>

        <Button size="large" block onClick={() => navigate(routes.newUser)}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
