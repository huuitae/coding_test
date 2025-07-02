function solution(my_string, is_suffix) {
  var answer = 0;

  for (let i = 0; i < my_string.length; i++) {
    my_string.slice(i, my_string.length + 1) === is_suffix
      ? (answer += 1)
      : (answer += 0);
  }

  return answer;
}

// console.log(solution('banana', 'ana'));

/**
 * 다른 답
 *
 * const solution = (str, suff) => str.endsWith(suff) ? 1 : 0
 */
// const solution = (str, suff) => (str.endsWith(suff) ? 1 : 0);
// console.log(solution('banana', 'nan'));
