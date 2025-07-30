function solution(num_list, n) {
  return num_list.indexOf(n) > 0 ? 1 : 0;
}

console.log(solution([15, 98, 23, 2, 15], 20));
