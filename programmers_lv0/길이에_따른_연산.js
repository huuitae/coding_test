function solution(num_list) {
  var answer = 0;
  answer =
    num_list.length >= 11
      ? num_list.reduce((acc, cur) => acc + cur)
      : num_list.reduce((acc, cur) => acc * cur);
  return answer;
}

console.log(solution([2, 3, 4, 5]));
