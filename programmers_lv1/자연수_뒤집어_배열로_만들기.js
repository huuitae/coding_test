function solution(n) {
  var answer = [];
  n = (n + '').split('').reverse();

  for (let i = 0; i < n.length; i++) {
    answer[i] = Number(n[i]);
  }
  return answer;
}

console.log(solution(12345));

/**
 * return (n + '').split('').reverse().map(n => parseInt(n));
 */
