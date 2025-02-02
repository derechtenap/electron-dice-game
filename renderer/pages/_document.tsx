import { Head, Html, Main, NextScript } from "next/document";
import { i18n } from "next-i18next";
import i18next from "../../next-i18next.config.js";
import { APP_NAME } from "../utils/constants";

const Document = () => {
  const defaultLocale = i18next.i18n.defaultLocale;

  return (
    <Html lang={i18n?.resolvedLanguage || defaultLocale}>
      <Head title={APP_NAME}/>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
