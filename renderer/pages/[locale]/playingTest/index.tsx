import { useState } from "react";
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";

import { getStaticPaths, makeStaticProperties } from "@/lib/getStatic";
import getInitialDices from "@/lib/playing/getInitialDices";

import { INITIAL_NUMBER_OF_DICES } from "utils/constants";
import DICE_ICONS from "utils/diceIcons";

const PlayingTestPage: NextPage = () => {
  const { t } = useTranslation();

  const [dices, setDices] = useState<number[]>([]);

  return (
    <>
      <button onClick={() => setDices(getInitialDices())}>
        Roll {INITIAL_NUMBER_OF_DICES} dices
      </button>
      <div style={{ display: "flex", gap: "10px" }}>
        {dices.map((dice, index) => (
          <span key={index}>{DICE_ICONS[dice]}</span>
        ))}
      </div>
    </>
  );
};

export default PlayingTestPage;

export const getStaticProps = makeStaticProperties(["common", "gameModes"]);

export { getStaticPaths };
