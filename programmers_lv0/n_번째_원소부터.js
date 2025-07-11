function solution(num_list, n) {
  var answer = [];
  answer = num_list.slice(n - 1);
  return answer;
}

console.log(solution([5, 2, 1, 7, 6], 2));
