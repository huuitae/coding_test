function solution(arr) {
  var answer = [];
  let s = arr.indexOf(2);
  let e = arr.lastIndexOf(2);
  if (arr.indexOf(2) === -1 && arr.lastIndexOf(2) === -1) {
    answer.push(-1);
  } else {
    answer = arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
  }

  return answer;
}

console.log(solution([1, 1, 1]));

/**
 * 다른 답
 * function solution(arr) {
    const from = arr.indexOf(2);
    const end = arr.lastIndexOf(2);

    return from === -1 ? [-1] : arr.slice(from, end+1);
}
 */
