import { useState } from "react";
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";

import { getStaticPaths, makeStaticProperties } from "@/lib/getStatic";
import {
  IconDice1,
  IconDice2,
  IconDice3,
  IconDice4,
  IconDice5,
  IconDice6,
} from "@tabler/icons-react";
import { INITIAL_NUMBER_OF_DICES } from "utils/constants";
import getInitialDices from "@/lib/playing/getInitialDices";

const diceIcons: Record<number, JSX.Element> = {
  1: <IconDice1 size={50} />,
  2: <IconDice2 size={50} />,
  3: <IconDice3 size={50} />,
  4: <IconDice4 size={50} />,
  5: <IconDice5 size={50} />,
  6: <IconDice6 size={50} />,
};

const PlayingTestPage: NextPage = () => {
  const { t } = useTranslation();

  const [dices, setDices] = useState<number[]>([]);

  return (
    <>
      <button
        onClick={() => setDices(getInitialDices())}
        style={{ marginBottom: "10px" }}
      >
        Roll {INITIAL_NUMBER_OF_DICES} dices
      </button>
      <div style={{ display: "flex", gap: "10px" }}>
        {dices.map((dice, index) => (
          <span key={index}>{diceIcons[dice]}</span>
        ))}
      </div>
    </>
  );
};

export default PlayingTestPage;

export const getStaticProps = makeStaticProperties(["common", "gameModes"]);

export { getStaticPaths };
