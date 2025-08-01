function solution(arr) {
  if (arr.length > arr[0].length) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = arr[i].length; j < arr.length; j++) {
        arr[i][j] = 0;
      }
    }
  } else if (arr.length < arr[0].length) {
    for (let i = arr.length; i < arr[0].length; i++) {
      let tempArr = new Array(arr[0].length).fill(0);
      arr[i] = tempArr;
    }
  }

  return arr;
}

console.log(
  solution([
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876],
  ])
);

console.log(
  solution([
    [57, 192, 534, 2],
    [9, 345, 192, 999],
  ])
);

console.log(
  solution([
    [1, 2],
    [3, 4],
  ])
);
