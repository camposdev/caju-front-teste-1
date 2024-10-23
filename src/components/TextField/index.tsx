import { InputHTMLAttributes } from "react";
import * as S from "./styles";

type Props = {
  label?: string
  id: string
  error?: string
} & InputHTMLAttributes<any>

const TextField = ({ label, id, error, ...props }: Props) => {
  return (
    <S.Container>
      {!!label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.Input id={id} {...props} />
      {!!error && <S.TextError>{error}</S.TextError>}
    </S.Container>
  );
};

export default TextField;
