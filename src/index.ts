// brute force

export const maxArea = (height: number[]): number => {
  let area = 0;
  const len = height.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      area = Math.max(area, Math.min(arr[j], arr[i]) * (j - i));
    }
  }
  return area;
};

const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log("Max Area brute force: ", maxArea(arr));

//  linear force
export const maxAreaUsingWhile = (height: number[]): number => {
  let i = 0;
  let j = height.length - 1;
  let area = 0;
  while (i < j) {
    area = Math.max(area, Math.min(arr[j], arr[i]) * (j - i));
    if (height[i] < height[j]) {
      ++i;
    } else {
      --j;
    }
  }
  return area;
}

console.log("Max Area with linear force: ", maxAreaUsingWhile(arr));

