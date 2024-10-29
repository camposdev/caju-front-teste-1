import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./lib/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5
    }
  }
});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider />
      <GlobalStyle />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </ThemeProvider>
);
