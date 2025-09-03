function solution(s) {
  var answer = [];

  for (let i = 0; i < s.length; i++) {
    let arr = [];

    for (let j = 0; j < i; j++) {
      if (s[i] === s[j] && i !== j) {
        arr.push(j);
      }
    }

    if (!arr.length) {
      answer.push(-1);
    } else {
      answer.push(i - Math.max(...arr));
    }
  }

  return answer;
}

/**
 * 더 좋은 방법
 * 
 * const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });
 */

console.log(solution("foobar"));
