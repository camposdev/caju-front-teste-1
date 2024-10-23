import { lighten, rem } from "polished";
import styled, { css } from "styled-components";
import { Color, Size } from "../Button";

const sizeStyle = {
  small: css`
    height: ${rem(36)};
    width: ${rem(36)};
    font-size: ${rem(16)};
  `,
  default: css`
    height: ${rem(44)};
    width: ${rem(44)};
    font-size: ${rem(18)};
  `,
  large: css`
    height: ${rem(50)};
    width: ${rem(50)};
    font-size: ${rem(20)};
  `,
};

export const IconButton = styled.button<{ size: Size, color: Color }>`
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  border: 2px solid ${({ theme, color }) => theme.colors[color]};
  border-radius: ${rem(16)};
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme, color }) => theme.colors[color]};
  border-radius: ${({ theme }) => theme.rounded.full};
  cursor: pointer;
  ${({ size }) => sizeStyle[size]};

  &:hover {
    background-color: ${({ theme, color }) => lighten(0.4, theme.colors[color])};
  }
`;