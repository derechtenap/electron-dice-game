import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

// Put overrides with custom stylesheets here
import "../styles/globals.css";
import "../styles/scrollbar.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
        <Component {...pageProps} />
  );
};

export default appWithTranslation(App);
