function solution(myString, pat) {
  var answer = 0;
  let arr = [];
  myString.split('').forEach((el) => {
    arr.push(el === 'A' ? 'B' : 'A');
  });
  answer = +arr.join('').includes(pat);
  return answer;
}

console.log(solution('ABBAA', 'AABB'));
