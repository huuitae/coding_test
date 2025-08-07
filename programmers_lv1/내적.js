function solution(a, b) {
  var answer = 0;
  a.forEach((el, idx) => {
    answer += el * b[idx];
  });
  return answer;
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
