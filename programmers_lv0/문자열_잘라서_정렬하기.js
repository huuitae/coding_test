function solution(myString) {
  var answer = [];
  answer = myString
    .split('x')
    .filter((el) => el !== '')
    .sort();
  return answer;
}

console.log(solution('axbxcxdx'));
console.log(solution('dxccxbbbxaaaa'));
