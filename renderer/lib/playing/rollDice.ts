/**
 * Generates a random dice value between 1 and 6.
 *
 * @author Tim Deres <derechtenap>
 * @version 1.0
 *
 * @returns {number} A random integer between 1 and 6.
 */
const rollDice = (): number => {
  return Math.floor(Math.random() * 6) + 1;
};

export default rollDice;
