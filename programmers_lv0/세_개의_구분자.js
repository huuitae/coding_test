function solution(myStr) {
  /**
   * 1. 정규 표현식 /[^a-c]+/g은 문자열에서 소문자 알파벳 a, b, c가 아닌 연속된 문자열을 찾는다.
     2. match() 함수를 활용하여 정규 표현식과 일치하는 a, b, c를 제외한 문자열을 리턴한다.
     3. match() 함수가 null을 반환하면 ['EMPTY'] 리턴한다.
   */
  return myStr.match(/[^a-c]+/g) || ['EMPTY'];
}

console.log(solution('baconlettucetomato'));

/**
 * const tmp1 = myStr.split('a').join('b');
  const tmp2 = tmp1.split('b').join('c');
  const tmp3 = tmp2.split('c').filter((x) => x);
  if (tmp3.length === 0) return ['EMPTY'];
  return tmp3;
 */
