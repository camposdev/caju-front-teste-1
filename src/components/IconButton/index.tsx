import { Color, Size } from "../Button";
import * as S from "./styles";

type Props = {
  children?: React.ReactNode
  size?: Size
  color?: Color
} & React.HTMLAttributes<HTMLButtonElement>;

const IconButton = ({ children, size = 'default', color = 'success', ...props }: Props) => {
  return (
    <S.IconButton size={size} color={color} {...props}>
      {children}
    </S.IconButton>
  );
};

export default IconButton;

