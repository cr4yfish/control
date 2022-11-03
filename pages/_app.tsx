import '../styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from "react";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const darkTheme = createTheme({
  type: "dark",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider 
      defaultTheme="dark"
      attribute="class"
      value={{dark: darkTheme.className}}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>  
    </NextThemesProvider>
  );
}

export default MyApp
