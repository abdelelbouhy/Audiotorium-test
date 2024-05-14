import { maxArea, maxAreaUsingWhile } from ".";

describe("Calculate max area", () => {
  it("should calculate max area from first array example using brute force", () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

    expect(maxArea(height)).toEqual(49);
  });

  it("should calculate max area from the second array example using brute force", () => {
    const height = [1, 1];

    expect(maxArea(height)).toEqual(1);
  });

  it("should calculate max area from first array example using  linear force", () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

    expect(maxAreaUsingWhile(height)).toEqual(49);
  });

  it("should calculate max area from the second array example using  linear force", () => {
    const height = [1, 1];

    expect(maxAreaUsingWhile(height)).toEqual(1);
  });
});
