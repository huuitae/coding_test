function solution(s) {
  return s
    .split("")
    .sort((a, b) => (a > b ? -1 : 1))
    .join("");
}

console.log(solution("Zbcdefg"));

/**
 * sort를 사용해서 정렬할 때 a - b로는 문자열 정렬이 되지 않는다.
 * 크기를 비교해서 양수, 음수의 값을 주면 내림, 오름차순이 가능하다.
 */
