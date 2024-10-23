import * as S from './styles';

export type Size = 'small' | 'default' | 'large'
export type Color = 'success' | 'warning' | 'danger'

type Props = {
  size?: Size
  children: React.ReactNode
  color?: Color
  block?: boolean
} & React.HTMLAttributes<HTMLButtonElement>;

const Button = ({ size = 'default', color = 'success', block = false, children, ...props }: Props) => {
  return (
    <S.Button size={size} color={color} block={block} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;