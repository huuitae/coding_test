function solution(q, r, code) {
  var answer = '';
  code.split('').forEach((el, idx) => {
    if (idx % q === r) answer += el;
  });
  return answer;
}

console.log(solution(3, 1, 'qjnwezgrpirldywt'));
