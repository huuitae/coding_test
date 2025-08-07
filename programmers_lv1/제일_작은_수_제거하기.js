function solution(arr) {
  var answer = arr.filter((_, idx) => idx !== arr.indexOf(Math.min(...arr)));
  return answer.length > 0 ? answer : [-1];
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
