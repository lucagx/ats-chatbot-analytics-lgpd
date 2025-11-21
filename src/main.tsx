
  import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App";
import "./tailwind.css";
import { ThemeProvider } from 'next-themes';

  const ThemeProviderWrapper: React.FC<
    React.PropsWithChildren<{
      attribute?: string;
      defaultTheme?: string;
      enableSystem?: boolean;
    }>
  > = ({ children, ...rest }) => {
    return <ThemeProvider {...(rest as any)}>{children}</ThemeProvider>;
  };

  createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ThemeProviderWrapper attribute="class" defaultTheme="light" enableSystem={false}>
        <App />
      </ThemeProviderWrapper>
    </React.StrictMode>
  );
  