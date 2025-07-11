function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list[i]);
  }
  return answer;
}

console.log(solution([4, 2, 6, 1, 7, 6], 2));

/**
 * 다른 답
 * 
const solution = (num_list, n) => num_list.filter((_, i) => !(i % n))
 */
