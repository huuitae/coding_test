function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}

/**
 * 다른 풀이
 * return +!(number % n || number % m);
 * number % n || number % m 연산을 해서 값이 0(나누어 떨어짐)이 된다.
 * 하지만 0은 falsy하기 때문에 !연산을 통해 결과를 반전해준다.
 * 결과가 true, false로 나오는데 이를 숫자로 바꾸기 위해 + 연산자를 추가한다.
 */
