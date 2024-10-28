import { forwardRef, InputHTMLAttributes } from "react";
import * as S from "./styles";

type Props = {
  label?: string
  id?: string
  error?: string
  mask?: string
} & InputHTMLAttributes<any>

const TextField = forwardRef(({ label, id, error, mask, ...props }: Props, ref) => {
  return (
    <S.Container>
      {!!label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.Input mask={mask} id={id} $error={!!error} inputRef={ref} {...props} />
      {!!error && <S.TextError>{error}</S.TextError>}
    </S.Container>
  );
});

export default TextField;
