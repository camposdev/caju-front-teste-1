import { lighten, rem } from "polished";
import styled, { css } from "styled-components";
import { TColor, TSize } from "../Button/Button";

const sizeStyle = {
  small: css`
    height: ${rem(28)};
    width: ${rem(28)};
    font-size: ${rem(16)};
  `,
  default: css`
    height: ${rem(38)};
    width: ${rem(38)};
    font-size: ${rem(18)};
  `,
  large: css`
    height: ${rem(48)};
    width: ${rem(48)};
    font-size: ${rem(20)};
  `,
};

export const IconButton = styled.button<{ $size: TSize, $color: TColor }>`
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  border: 2px solid ${({ theme, $color }) => theme.colors[$color]};
  border-radius: ${rem(16)};
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme, $color }) => theme.colors[$color]};
  border-radius: ${({ theme }) => theme.rounded.full};
  padding: 0;
  cursor: pointer;
  ${({ $size }) => sizeStyle[$size]};

  &:hover {
    background-color: ${({ theme, $color }) => lighten(0.48, theme.colors[$color])};
  }
`;