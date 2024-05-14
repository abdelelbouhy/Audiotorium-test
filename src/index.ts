const maxArea = (height: number[]): number => {
    let area = 0;
    const len = height.length
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        area = Math.max(area, Math.min(arr[j], arr[i]) * (j - i));
      }
    }
    return area;
  }
  
  const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  console.log("Max Area: ", maxArea(arr));

  export default maxArea;
  
  