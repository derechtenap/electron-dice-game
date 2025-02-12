import { Head, Html, Main, NextScript } from "next/document";
import { i18n } from "next-i18next";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";

import i18next from "../../next-i18next.config.js";
import { APP_NAME } from "@/utils/constants";

const Document = () => {
  const defaultLocale = i18next.i18n.defaultLocale;

  return (
    <Html lang={i18n?.resolvedLanguage || defaultLocale} {...mantineHtmlProps}>
      <Head title={APP_NAME}>
        <ColorSchemeScript defaultColorScheme="auto" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
