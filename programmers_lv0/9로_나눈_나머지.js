function solution(number) {
  var answer = 0;
  let arr = number.split('');
  answer = arr.reduce((acc, cur) => Number(acc) + Number(cur)) % 9;
  return answer;
}

console.log(solution('78720646226947352489'));
