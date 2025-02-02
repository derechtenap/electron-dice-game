import { getStaticPaths, makeStaticProperties } from "@/lib/getStatic";
import { useTranslation } from "next-i18next";

const IndexPage = () => {
  const { t } = useTranslation();

  return <>{t("yes")}</>;
};

export default IndexPage;

export const getStaticProps = makeStaticProperties(["common", "gameModes"]);

export { getStaticPaths };
