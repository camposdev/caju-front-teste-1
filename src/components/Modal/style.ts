import { rem } from "polished";
import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
`;

export const Card = styled.article`
  position: relative;
  width: 100%;
  max-width: 400px;
  background-color: white;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadow.md};
`;

export const Title = styled.h3`
  font-size: ${rem(20)};
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
`;

export const Content = styled.section`
  font-size: ${rem(16)};
`;

export const Actions = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;