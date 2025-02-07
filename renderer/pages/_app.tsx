import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import { createTheme, MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";

// Put overrides with custom stylesheets here
import "../styles/globals.css";
import "../styles/scrollbar.css";

const theme = createTheme({
  fontFamily: "serif",
  radius: {
    xs: "0",
    sm: "0",
    md: "0",
    lg: "0",
    xl: "0",
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default appWithTranslation(App);
