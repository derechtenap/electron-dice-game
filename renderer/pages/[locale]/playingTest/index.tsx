import { useState } from "react";
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";

import { Box, Button, Flex, Stack } from "@mantine/core";

import { getStaticPaths, makeStaticProperties } from "@/lib/getStatic";
import getInitialDices from "@/lib/playing/getInitialDices";

import { INITIAL_NUMBER_OF_DICES } from "utils/constants";
import { DICE_ICONS, FILLED_DICE_ICONS } from "utils/diceIcons";

const PlayingTestPage: NextPage = () => {
  const { t } = useTranslation();

  // State for the dice values and their selection status.
  const [dices, setDices] = useState<number[]>([]);
  const [selectedDices, setSelectedDices] = useState<boolean[]>([]);

  // Roll new dices and reset selection.
  const rollDices = () => {
    const newDices = getInitialDices();
    setDices(newDices);
    setSelectedDices(new Array(newDices.length).fill(false));
  };

  // Toggle the selected state of a dice at the given index.
  const toggleDiceSelection = (index: number) => {
    setSelectedDices((prevSelected) => {
      const updated = [...prevSelected];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <Stack>
      <Button onClick={rollDices}>Roll {INITIAL_NUMBER_OF_DICES} dices</Button>
      <Flex gap="xs">
        {dices.map((dice, index) => (
          <Box
            key={index}
            onClick={() => toggleDiceSelection(index)}
            style={{ cursor: "pointer" }}
          >
            {selectedDices[index] ? FILLED_DICE_ICONS[dice] : DICE_ICONS[dice]}
          </Box>
        ))}
      </Flex>
    </Stack>
  );
};

export default PlayingTestPage;

export const getStaticProps = makeStaticProperties(["common", "gameModes"]);

export { getStaticPaths };
