import { TColor, TSize } from "../Button/Button";
import * as S from "./styles";

type Props = {
  children?: React.ReactNode
  size?: TSize
  color?: TColor
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({ children, size = 'default', color = 'success', ...props }: Props) => {
  return (
    <S.IconButton $size={size} $color={color} {...props}>
      {children}
    </S.IconButton>
  );
};

export default IconButton;

