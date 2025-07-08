function solution(arr, intervals) {
  var answer = [];
  intervals.forEach(([s, e]) => {
    answer.push(...arr.slice(s, e + 1));
  });
  return answer;
}

console.log(
  solution(
    [1, 2, 3, 4, 5],
    [
      [1, 3],
      [0, 4],
    ]
  )
);

/**
 * 다른 답
 * function solution(arr, intervals) {
    const [[a,b],[c,d]] = intervals;

    return [...arr.slice(a, b+1), ...arr.slice(c, d+1)];
}
 */
