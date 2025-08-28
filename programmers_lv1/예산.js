function solution(d, budget) {
  var answer = 0;

  d.sort((a, b) => a - b).forEach((el) => {
    if (budget >= el) {
      budget -= el;
      answer++;
    } else return;
  });

  return answer;
}

console.log(solution([2, 2, 3, 3], 10));
console.log(solution([1, 3, 2, 5, 4], 9));

/**
 * 그리디 알고리즘
 *
 * 미래를 생각하지 않고 현재에 집중한다.
 * 정렬이 중요하다.
 */
