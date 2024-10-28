import * as S from './styles';

export type TSize = 'small' | 'default' | 'large'
export type TColor = 'success' | 'warning' | 'danger'

type TProps = {
  size?: TSize
  children: React.ReactNode
  color?: TColor
  block?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ size = 'default', color = 'success', block = false, children, ...props }: TProps) => {
  return (
    <S.Button $size={size} $color={color} $block={block} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;