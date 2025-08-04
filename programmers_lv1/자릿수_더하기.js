function solution(n) {
  var answer = 0;
  answer = n
    .toString()
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0);

  return answer;
}

console.log(solution(9));
