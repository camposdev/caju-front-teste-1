import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  border: 4px solid #fff;
  margin: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.rounded.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadow.sm};

  h3, p {
    margin: 0;
  }
`;

export const IconAndText = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Actions = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  svg {
    cursor: pointer;
  }
`;
