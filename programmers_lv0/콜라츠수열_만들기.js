function solution(n) {
  var answer = [n];

  while (true) {
    if (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
        answer.push(n);
      } else {
        n = n * 3 + 1;
        answer.push(n);
      }
    } else {
      break;
    }
  }
  return answer;
}

console.log(solution(10));

/**
 * 다른 답. 재귀함수 사용
 *  function solution(n, arr = []) {
    arr.push(n)
    if (n === 1) return arr
    if (n % 2 === 0) return solution(n / 2, arr)
    return solution(3 * n + 1, arr)
}
 */
