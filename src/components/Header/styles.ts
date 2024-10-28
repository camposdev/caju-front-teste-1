import { rem } from "polished";
import styled from "styled-components";

export const headerHeight = 64;

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.warning};
  background: ${({ theme }) => `linear-gradient(258deg, ${theme.colors.warning} 8%, ${theme.colors.danger} 53%)`};
  width: 100%;
  height: ${rem(headerHeight)};
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0px ${({ theme }) => theme.spacing.lg};

  h1 {
    color: white;
    font-size: ${rem(24)};
  }
`;