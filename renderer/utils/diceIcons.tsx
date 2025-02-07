import {
  IconDice1,
  IconDice2,
  IconDice3,
  IconDice4,
  IconDice5,
  IconDice6,
  IconDice1Filled,
  IconDice2Filled,
  IconDice3Filled,
  IconDice4Filled,
  IconDice5Filled,
  IconDice6Filled,
} from "@tabler/icons-react";

type DiceIcons = Record<number, JSX.Element>;

const DICE_ICONS: DiceIcons = {
  1: <IconDice1 />,
  2: <IconDice2 />,
  3: <IconDice3 />,
  4: <IconDice4 />,
  5: <IconDice5 />,
  6: <IconDice6 />,
};

const FILLED_DICE_ICONS: DiceIcons = {
  1: <IconDice1Filled />,
  2: <IconDice2Filled />,
  3: <IconDice3Filled />,
  4: <IconDice4Filled />,
  5: <IconDice5Filled />,
  6: <IconDice6Filled />,
};

export { DICE_ICONS, FILLED_DICE_ICONS };
export default DICE_ICONS;
