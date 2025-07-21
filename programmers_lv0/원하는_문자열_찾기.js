function solution(myString, pat) {
  var answer = 0;
  answer = +myString.toUpperCase().includes(pat.toUpperCase());
  return answer;
}

console.log(solution('AbCaBc', 'aBc'));
console.log(solution('aaAA', 'aaaaa'));
