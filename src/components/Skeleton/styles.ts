import { rem } from "polished";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    background-color: #f1f1f1;
  }
  50% {
    background-color: #d9d9d9;
  }
  100% {
    background-color: #f1f1f1;
  }
`;

export const Component = styled.div<{ $width: number, $height: number }>`
  background-color: #f1f1f1;
  border-radius: ${({ theme }) => theme.rounded.md};
  animation: ${pulse} 1.5s infinite ease-in-out;
  width: ${({ $width }) => rem($width) || '100%'};
  height: ${({ $height }) => rem($height) || rem(20)};
`;
