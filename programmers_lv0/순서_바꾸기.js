function solution(num_list, n) {
  var answer = [];
  answer = num_list.slice(n).concat(num_list.slice(0, n));
  return answer;
}

console.log(solution([2, 1, 6], 1));
