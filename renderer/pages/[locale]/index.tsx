import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import { getStaticPaths, makeStaticProperties } from "@/lib/getStatic";
import formatLocalizedRoute from "utils/navigation/formatLocalizedRoute";

const IndexPage: NextPage = () => {
  const {
    t,
    i18n: { language: locale },
  } = useTranslation();

  return (
    <>
      <p>{t("yes")}</p>
      <ul>
        <li>
          <Link
            href={formatLocalizedRoute({
              locale,
              route: "/playingTest",
            })}
          >
            PlayingTest
          </Link>
        </li>
      </ul>
    </>
  );
};

export default IndexPage;

export const getStaticProps = makeStaticProperties(["common", "gameModes"]);

export { getStaticPaths };
