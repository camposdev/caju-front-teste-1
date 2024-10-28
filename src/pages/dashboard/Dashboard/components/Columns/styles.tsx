import styled from "styled-components";
import { darken, lighten, rem } from "polished";
import { TRegistrationStatus } from "~/api/registrations/types";

type Colors = 'yellow' | 'blue' | 'pink'

export const registrationStatusStyles: Record<TRegistrationStatus, Colors> = {
  REVIEW: 'yellow',
  APROVED: 'blue',
  REPROVED: 'pink',
};

export const Container = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  min-height: 0;

  @media ${({ theme }) => theme.responsive.md} {
    flex-direction: row;
  }
`;

export const Column = styled.section<{ $status: TRegistrationStatus }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ $status, theme }) => lighten(0.35, theme.colors[registrationStatusStyles[$status]])};
  border-radius: ${({ theme }) => theme.rounded.lg};
  border: 1px solid ${({ $status, theme }) => lighten(0.3, theme.colors[registrationStatusStyles[$status]])};
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const TitleColumn = styled.h2<{ $status: TRegistrationStatus }>`
  margin: 0;
  font-size: ${rem(20)};
  color: ${({ $status, theme }) => darken(0.2, theme.colors[registrationStatusStyles[$status]])};
`;

export const CollumContent = styled.div`
  overflow: auto;
  margin-top: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Loading = styled.div<{ $status: TRegistrationStatus }>`
  color: ${({ $status, theme }) => theme.colors[registrationStatusStyles[$status]]};
  font-size: ${rem(40)};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;