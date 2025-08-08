function solution(arr1, arr2) {
  var answer = [[]];
  answer = arr1.map((el, idx) => {
    return el.map((v, i) => v + arr2[idx][i]);
  });
  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
