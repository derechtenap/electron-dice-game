import checkForBust from "./checkForBust";

describe("checkForBust", () => {
  test("returns false when the array contains a 1", () => {
    expect(checkForBust([1, 2, 3, 4, 5, 6])).toBe(false);
  });

  test("returns false when the array contains a 5", () => {
    expect(checkForBust([2, 2, 3, 4, 5, 6])).toBe(false);
  });

  test("returns true when the array contains neither 1 nor 5", () => {
    expect(checkForBust([2, 2, 3, 3, 4, 4])).toBe(true);
  });

  test("returns false when the array contains both 1 and 5", () => {
    expect(checkForBust([1, 2, 3, 4, 5, 6])).toBe(false);
  });

  test("returns false for an empty array", () => {
    expect(checkForBust([])).toBe(true);
  });
});
