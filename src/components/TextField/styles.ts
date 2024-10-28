import { rem } from "polished";
import { IMaskInput } from "react-imask";
import styled from "styled-components";

export const Container = styled.div``;

export const Input = styled(IMaskInput)<{ $error: boolean }>`
  display: block;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.md};
  background-color: white;
  border: 1px solid ${({ theme, $error }) => $error ? theme.colors.danger : theme.colors.grey};
  font-size: ${rem(14)};
  border-radius: ${({ theme }) => theme.rounded.md};
  height: ${rem(44)};
`;

export const TextError = styled.div`
  font-size: ${rem(12)};
  color: ${({ theme }) => theme.colors.danger};
  margin-top: 2px;
`;

export const Label = styled.label`
  display: inline-block;
  font-weight: bold;
  font-size: ${rem(14)};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;
