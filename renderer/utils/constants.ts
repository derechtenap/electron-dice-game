import pkg from "../../package.json";

export const APP_NAME = pkg.productName;
export const APP_VERSION = pkg.version;

// Date options used on all pages and components
export const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

export const INITIAL_NUMBER_OF_DICES = 6;

export const FULL_STRAIGHT = [1, 2, 3, 4, 5, 6];
export const PARTIAL_STRAIGHT_ONE_TO_FIVE = [1, 2, 3, 4, 5];
export const PARTIAL_STRAIGHT_TWO_TO_SIX = [2, 3, 4, 5, 6];

export const LOWEST_DICE_SIDE = 1;
export const HIGHEST_DICE_SIDE = 6;
