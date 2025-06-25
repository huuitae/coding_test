function solution(arr, queries) {
  var answer = [...arr];

  queries.map(([a, b], idx) => {
    let temp = answer[val[0]];
    answer[val[0]] = answer[val[1]];
    answer[val[1]] = temp;
    console.log(a, b);
  });

  // return answer;

  /**
   * 다른 답
   */
  queries.forEach(([a, b]) => {
    console.log(a, b);
    [arr[a], arr[b]] = [arr[b], arr[a]];
    [arr[a], arr[b]] = [arr[b], arr[a]];
    console.log(arr);
  });

  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 3],
      [1, 2],
      [1, 4],
    ]
  )
);
