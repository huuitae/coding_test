function solution(t, p) {
  var answer = 0;

  for (let i = 0; i < t.length; i++) {
    if (p.length + i > t.length) break;
    if (Number(t.slice(i, p.length + i)) <= Number(p)) answer++;
  }

  return answer;
}

console.log(solution("10203", "15"));
