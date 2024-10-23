import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing.xl} 0;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Card = styled.div`
  max-width: 500px;
  padding: ${({ theme }) => theme.spacing.lg};
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadow.lg};
`;
