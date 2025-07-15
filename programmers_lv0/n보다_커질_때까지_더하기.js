function solution(numbers, n) {
  var answer = 0;
  for (const el of numbers) {
    answer += el;
    if (answer > n) break;
  }
  return answer;
}

console.log(solution([34, 5, 71, 29, 100, 34], 123));
