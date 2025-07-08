function solution(num_list) {
  let answer = num_list.findIndex((el) => el < 0);
  return answer;
}

console.log(solution([12, 4, 15, 46, 38, -2, 15]));
