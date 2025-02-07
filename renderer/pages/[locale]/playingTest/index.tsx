import { useState } from "react";
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";

import { Box, Button, Flex, Group, Stack, Text, Tooltip } from "@mantine/core";

import { getStaticPaths, makeStaticProperties } from "@/lib/getStatic";
import getInitialDices from "@/lib/playing/getInitialDices";

import { DICE_ICONS, FILLED_DICE_ICONS } from "utils/diceIcons";
import rollDice from "@/lib/playing/rollDice";
import { INITIAL_NUMBER_OF_DICES } from "utils/constants";
import checkForBust from "@/lib/playing/scoring/checkForBust";

const PlayingTestPage: NextPage = () => {
  const { t } = useTranslation();

  // State for the dice values and their selection status.
  const [dices, setDices] = useState<number[]>([]);
  const [selectedDices, setSelectedDices] = useState<boolean[]>([]);
  const [bankedDices, setBankedDices] = useState<number[]>([]);

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
    setBankedDices([]);
    setSelectedDices([]);
  };

  const addDicesToBank = () => {
    // Filter out selected dice
    const selected = dices.filter((_, index) => selectedDices[index]);

    // Append selected dice to the bank
    setBankedDices((prevBankedDices) => {
      const newBankedDices = [...prevBankedDices, ...selected];

      // Generate new dice after updating the bank
      const remainingDiceCount =
        INITIAL_NUMBER_OF_DICES - newBankedDices.length;
      const newDices = Array.from({ length: remainingDiceCount }, () =>
        rollDice()
      );

      setDices(newDices);
      setSelectedDices(new Array(newDices.length).fill(false)); // Reset selection

      return newBankedDices;
    });
  };

  return (
    <Stack>
      <Group grow>
        <Button disabled={dices.length !== 0} onClick={rollDices}>
          {t("playing:startRound")}
        </Button>
        <Button
          disabled={checkForBust(dices) || !selectedDices.includes(true)}
          onClick={addDicesToBank}
        >
          {t("playing:addDicesToBank")}
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
              <Tooltip
                label={t(`playing:diceSide.${dice}`)}
                position="bottom"
                withArrow
              >
                {selectedDices[index]
                  ? FILLED_DICE_ICONS[dice]
                  : DICE_ICONS[dice]}
              </Tooltip>
            </Box>
          ))}
        </Flex>
        <Flex>
          Bank:
          {bankedDices.map((dice, index) => (
            <Box key={index}>
              <Tooltip label={t(`dice.${dice}`)} position="bottom" withArrow>
                {DICE_ICONS[dice]}
              </Tooltip>
            </Box>
          ))}
        </Flex>
      </Group>
      <Text>Dices: {JSON.stringify(dices)}</Text>
      <Text>Bust: {JSON.stringify(checkForBust(dices))}</Text>
      <Text>Selected: {JSON.stringify(selectedDices)}</Text>
    </Stack>
  );
};

export default PlayingTestPage;

export const getStaticProps = makeStaticProperties(["common", "playing"]);

export { getStaticPaths };
