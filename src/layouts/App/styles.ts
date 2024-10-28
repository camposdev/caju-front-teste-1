import { rem } from "polished";
import styled from "styled-components";
import { headerHeight } from "~/components/Header/styles";

export const Container = styled.main`
  padding: ${({ theme }) => theme.spacing.lg};
  margin-top: ${rem(headerHeight)};

  @media ${({ theme }) => theme.responsive.md} {
    height: calc(100vh - ${rem(headerHeight)});
  }
`;
