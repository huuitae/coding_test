function solution(myString) {
  var answer = [];
  answer = myString.split('x').map((el) => el.length);
  return answer;
}

console.log(solution('oxooxoxxox'));
