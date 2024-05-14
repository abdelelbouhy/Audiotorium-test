import maxArea from ".";

describe("Calculate max area", () => {
  it("should calculate max area from first array example", () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

    expect(maxArea(height)).toEqual(49);
  });

  it("should calculate max area from the second array example", () => {
    const height = [1,1]

    expect(maxArea(height)).toEqual(1);
  });
});
