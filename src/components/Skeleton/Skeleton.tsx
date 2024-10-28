import * as S from './styles';

type TProps = {
  width?: number
  height?: number
} & React.HTMLAttributes<HTMLDivElement>

const Skeleton = ({ width, height, ...props }: TProps) => {
  return (
    <S.Component $width={width} $height={height} {...props} />
  );
};

export default Skeleton;