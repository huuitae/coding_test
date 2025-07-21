function solution(arr) {
  var answer = [];
  arr.forEach((el) => {
    if (el >= 50 && el % 2 === 0) {
      answer.push(el / 2);
    } else if (el < 50 && el % 2 === 1) {
      answer.push(el * 2);
    } else {
      answer.push(el);
    }
  });
  return answer;
}

console.log(solution([1, 2, 3, 100, 99, 98]));
