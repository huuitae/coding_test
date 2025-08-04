function solution(x, n) {
  var answer = [];
  // for (let i = 0; i < n; i++) {
  //   answer[i] = x;
  //   x += answer[0];
  // }
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

console.log(solution(-4, 2));
