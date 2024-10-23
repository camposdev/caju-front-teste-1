import { darken, rem } from "polished";
import styled, { css } from "styled-components";
import { Color, Size } from ".";

const sizeStyle = {
  small: css`
    padding: 0 ${rem(20)};
    height: ${rem(36)};
    font-size: ${rem(12)};
  `,
  default: css`
    padding: 0 ${rem(24)};
    height: ${rem(44)};
    font-size: ${rem(16)};
  `,
  large: css`
    padding: 0 ${rem(30)};
    height: ${rem(50)};
    font-size: ${rem(18)};
  `,
};

export const Button = styled.button<{ size: Size, color: Color, block: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${rem(10)};
  border: none;
  background-color: ${({ theme, color }) => theme.colors[color]};
  color: white;
  font-weight: bold;
  transition: ${({ theme }) => theme.transition};
  width: ${({ block }) => block ? '100%' : 'auto'};
  border-radius: ${({ theme }) => theme.rounded.full};
  cursor: pointer;

  ${({ size }) => sizeStyle[size as Size]};

  &:hover {
    background-color: ${({ theme, color }) => darken(0.05, theme.colors[color])};
  }
`;