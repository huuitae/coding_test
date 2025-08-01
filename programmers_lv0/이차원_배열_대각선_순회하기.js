function solution(board, k) {
  var answer = 0;
  board.forEach((arr, idx) => {
    arr.forEach((el, elIdx) => {
      if (idx + elIdx <= k) {
        answer += el;
      }
    });
  });
  return answer;
}

console.log(
  solution(
    [
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
    ],
    2
  )
);
