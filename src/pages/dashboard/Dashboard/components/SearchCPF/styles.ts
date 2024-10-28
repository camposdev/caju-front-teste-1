import { rem } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  @media ${({ theme }) => theme.responsive.md} {
    align-items: center;
    flex-direction: row;
  }
`;

export const FilterContent = styled.div`
  h3 {
    margin: 0;
    font-size: ${rem(14)};
  }
`;

export const Link = styled.button`
  color: ${({ theme }) => theme.colors.danger};
  font-weight: bold;
  font-size: ${rem(12)};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
