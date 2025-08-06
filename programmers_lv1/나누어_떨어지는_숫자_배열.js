function solution(arr, divisor) {
  var answer = [];
  arr.forEach((el) => {
    if (!(el % divisor)) answer.push(el);
  });
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([3, 2, 6], 10));

/**
 * filter 쓰자.
 */
