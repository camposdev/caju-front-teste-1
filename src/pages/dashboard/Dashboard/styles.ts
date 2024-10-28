import styled from "styled-components";

export const Container = styled.div`  
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  @media ${({ theme }) => theme.responsive.md} {
    height: 100%;
  }
`;
