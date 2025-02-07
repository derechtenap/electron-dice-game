import { useState } from "react";
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";

import { Box, Button, Flex, Group, Stack, Tooltip } from "@mantine/core";

import { getStaticPaths, makeStaticProperties } from "@/lib/getStatic";
import getInitialDices from "@/lib/playing/getInitialDices";

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

  // Reset the current round. Only for debugging purposes!
  // TODO: Disable this code later
  const resetRound = () => {
    setDices([]);
    setSelectedDices([]);
  };

  return (
    <Stack>
      <Group>
        <Button disabled={dices.length !== 0} onClick={rollDices}>
          {t("playing:startRound")}
        </Button>
        <Button onClick={resetRound}>{t("cancel")}</Button>
      </Group>
      <Group>
        <Flex gap="xs">
          Current:
          {dices.map((dice, index) => (
            <Box
              key={index}
              onClick={() => toggleDiceSelection(index)}
              style={{ cursor: "pointer" }}
            >
              <Tooltip label={t(`dice.${dice}`)} position="bottom" withArrow>
                {selectedDices[index]
                  ? FILLED_DICE_ICONS[dice]
                  : DICE_ICONS[dice]}
              </Tooltip>
            </Box>
          ))}
        </Flex>
        <Flex>Bank:</Flex>
      </Group>
    </Stack>
  );
};

export default PlayingTestPage;

export const getStaticProps = makeStaticProperties(["common", "playing"]);

export { getStaticPaths };
