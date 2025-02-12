import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Button, Container, Stack, Title } from "@mantine/core";

import WoodBackground from "@/components/WoodBackground";

import { getStaticPaths, makeStaticProperties } from "@/lib/getStatic";

import formatLocalizedRoute from "@/utils/navigation/formatLocalizedRoute";
import { APP_NAME } from "@/utils/constants";
import ROUTES from "@/utils/navigation/routes";

/**
 * Renders the main menu with a wooden background.
 *
 * TODO: Improve UI styling
 */
const IndexPage: NextPage = () => {
  const {
    t,
    i18n: { language: locale },
  } = useTranslation();

  return (
    <WoodBackground>
      <Stack align="end" justify="center" h="100%" component={Container}>
        <Title mb="lg">{APP_NAME}</Title>
        {ROUTES.map((route) => (
          <Button
            component={Link}
            href={formatLocalizedRoute({ locale, route: route.href })}
            key={route.href}
            variant="default"
          >
            {t(route.label)}
          </Button>
        ))}
        <Button variant="default">{t("route.closeGame")}</Button>
      </Stack>
    </WoodBackground>
  );
};

export default IndexPage;

export const getStaticProps = makeStaticProperties(["common", "gameModes"]);

export { getStaticPaths };
