function solution(arr, queries) {
  var answer = [];

  queries.forEach(([s, e, k]) => {
    let value = arr.slice(s, e + 1).filter((el) => el > k);
    // console.log(Math.min(...value));
    // console.log(value);
    answer.push(value.length ? Math.min(...value) : -1);
  });

  return answer;
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
);
