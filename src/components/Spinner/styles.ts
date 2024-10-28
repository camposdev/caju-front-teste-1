import styled, { keyframes } from "styled-components";
import { ImSpinner } from "react-icons/im";
import { rem } from "polished";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerIcon = styled(ImSpinner)<{ $size: number }>`
  font-size: ${({ $size }) => $size ? rem($size) : "inherit"};
  animation: ${rotate} 2s linear infinite;
`;