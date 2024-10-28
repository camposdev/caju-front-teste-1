import * as S from './styles';

type TProps = {
  children: React.ReactNode
}

const Header = ({ children }: TProps) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
};

export default Header;