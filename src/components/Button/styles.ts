import { darken, rem } from "polished";
import styled, { css } from "styled-components";
import { TColor, TSize } from "./Button";

const sizeStyle = {
  small: css`
    padding: 0 ${rem(14)};
    height: ${rem(28)};
    font-size: ${rem(12)};
  `,
  default: css`
    padding: 0 ${rem(24)};
    height: ${rem(38)};
    font-size: ${rem(14)};
  `,
  large: css`
    padding: 0 ${rem(30)};
    height: ${rem(48)};
    font-size: ${rem(16)};
  `,
};

export const Button = styled.button<{ $size: TSize, $color: TColor, $block: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${rem(10)};
  border: none;
  background-color: ${({ theme, $color }) => theme.colors[$color]};
  color: white;
  font-weight: bold;
  transition: ${({ theme }) => theme.transition};
  width: ${({ $block }) => $block ? '100%' : 'auto'};
  border-radius: ${({ theme }) => theme.rounded.full};
  cursor: pointer;

  ${({ $size }) => sizeStyle[$size as TSize]};

  &:hover {
    background-color: ${({ theme, $color }) => darken(0.05, theme.colors[$color])};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;