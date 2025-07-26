function solution(strArr) {
  var answer = 0;
  let lengthArr = new Array(30).fill(0);
  strArr.forEach((el) => lengthArr[el.length - 1]++);

  for (const count of lengthArr) {
    if (count > answer) answer = count;
  }

  return answer;
}

console.log(solution(['a', 'bc', 'd', 'efg', 'hi']));

/**
 * 다른 답
 * function solution(strArr) {
    let ans = Array(31).fill(0);
    for (let s of strArr) ans[s.length]++
    return Math.max(...ans)
}
  Math.max()로 가장 큰 값 구하기
 */
