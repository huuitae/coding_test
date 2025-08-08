function solution(s) {
  for (const test of s) {
    if (isNaN(Number(test))) {
      return false;
    }
  }
  return Number(s) >= 0 && (s.length === 4 || s.length === 6);
}

console.log(solution("a234"));
console.log(solution("3e10"));
console.log(solution("0x16"));
console.log(solution("1234"));

/**
 * 0x16을 넣었을 때에도 true로 나오기 때문에 완벽하지 않음
 * 따라서 for of로 문자 하나하나 값을 비교해보아야 할듯
 *
 * 원래 작성한 답
 * return !s.includes("e") && Number(s) >= 0 && (s.length === 4 || s.length === 6);
 */
