import * as S from './styles';

type TProps = {
  size?: number
}

const Spinner = ({ size }: TProps) => {
  return (
    <S.SpinnerIcon $size={size} />
  );
};

export default Spinner;