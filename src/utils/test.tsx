import { render as rtlRender } from "@testing-library/react";
import { ReactNode, FC } from "react";
import { theme } from "~/lib/theme";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

const AllProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const render = (ui: React.ReactElement, options = {}) =>
  rtlRender(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { render };
