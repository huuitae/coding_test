function solution(arr, queries) {
  queries.forEach(([s, e]) => {
    for (s; s <= e; s++) {
      arr[s]++;
    }
  });
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ]
  )
);
