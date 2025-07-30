function solution(a, b) {
  var answer = 0;
  if (a % 2 && b % 2) {
    answer = a * a + b * b;
  } else if ((a % 2 && !(b % 2)) || (!(a % 2) && b % 2)) {
    answer = 2 * (a + b);
  } else {
    answer = Math.abs(a - b);
  }
  return answer;
}

console.log(solution(3, 5));

/**
 * 홀수인지 체크하는 함수만들어서 해보기
 * const isOdd = (num) => num % 2 === 1;
 */
