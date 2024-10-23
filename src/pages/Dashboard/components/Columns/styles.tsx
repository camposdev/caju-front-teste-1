import styled from "styled-components";
import { Status } from ".";
import { darken, lighten, rem } from "polished";

type Colors = 'yellow' | 'blue' | 'pink'

const registrationStatusStyles: Record<Status, Colors> = {
  REVIEW: 'yellow',
  APPROVED: 'blue',
  REPROVED: 'pink',
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.lg};

  @media ${({ theme }) => theme.responsive.md} {
    grid-template-columns: 1fr 1fr 1fr;
    height: calc(100vh - ${rem(186)});
  }
`;

export const Column = styled.div<{ status: Status }>`
  height: auto;
  background-color: ${({ status, theme }) => lighten(0.35, theme.colors[registrationStatusStyles[status]])};
  border-radius: ${({ theme }) => theme.rounded.lg};
  border: 1px solid ${({ status, theme }) => lighten(0.3, theme.colors[registrationStatusStyles[status]])};
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const TitleColumn = styled.h3<{ status: Status }>`
  margin: 0;
  color: ${({ status, theme }) => darken(0.2, theme.colors[registrationStatusStyles[status]])};
`;

export const CollumContent = styled.div`
  overflow: auto;
`;
