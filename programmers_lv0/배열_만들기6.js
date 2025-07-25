function solution(arr) {
  var answer = [];
  arr.forEach((el) => {
    el === answer[answer.length - 1] ? answer.pop() : answer.push(el);
  });

  if (!answer.length) answer.push(-1);

  return answer;
}

console.log(solution([0, 1, 1, 0]));
