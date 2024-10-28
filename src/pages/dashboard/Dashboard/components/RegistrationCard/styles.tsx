import { darken, lighten, rem } from "polished";
import styled from "styled-components";
import { TRegistrationStatus } from "~/api/registrations/types";
import { registrationStatusStyles } from "../Columns/styles";

export const Card = styled.article<{ $status: TRegistrationStatus }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.rounded.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: white;
  border: 1px solid ${({ $status, theme }) => lighten(0.25, theme.colors[registrationStatusStyles[$status]])};
  border-bottom-width: 2px;
`;

export const HeaderContent = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const IconAndText = styled.div`
  display: flex;
  align-items: center;
  font-size: ${rem(14)};
  gap: ${({ theme }) => theme.spacing.sm};

  svg {
    color: ${({ theme }) => darken(0.4, theme.colors.grey)};
    font-size: ${rem(16)};
  }
  h3 {
    margin: 0;
    font-size: ${rem(16)};
  }
  p, time {
    margin: 0;
    font-size: ${rem(14)};
    color: ${({ theme }) => lighten(0.3, theme.colors.foreground)};
  }
`;

export const Actions = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`;
