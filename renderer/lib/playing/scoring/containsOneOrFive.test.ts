import containsOneOrFive from "./containsOneOrFive";

describe("containsOneOrFive", () => {
  test("returns true when the array contains a 1", () => {
    expect(containsOneOrFive([1, 2, 3, 4, 5, 6])).toBe(true);
  });

  test("returns true when the array contains a 5", () => {
    expect(containsOneOrFive([2, 2, 3, 4, 5, 6])).toBe(true);
  });

  test("returns false when the array contains neither 1 nor 5", () => {
    expect(containsOneOrFive([2, 2, 3, 3, 4, 4])).toBe(false);
  });

  test("returns true when the array contains both 1 and 5", () => {
    expect(containsOneOrFive([1, 2, 3, 4, 5, 6])).toBe(true);
  });

  test("returns false for an empty array", () => {
    expect(containsOneOrFive([])).toBe(false);
  });
});
