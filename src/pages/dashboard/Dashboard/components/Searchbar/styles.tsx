import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column-reverse;
  gap: ${({ theme }) => theme.spacing.md};

  @media ${({ theme }) => theme.responsive.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    input {
      width: 300px;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media ${({ theme }) => theme.responsive.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`;