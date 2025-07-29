function solution(num_str) {
  var answer = 0;
  return num_str.split('').reduce((acc, cur) => Number(acc) + Number(cur));
}

console.log(solution('123456789'));
