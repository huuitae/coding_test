function solution(arr, idx) {
  var answer = 0;
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) {
      answer = i;
      break;
    } else {
      answer = -1;
    }
  }
  return answer;
}

console.log(solution([1, 1, 1, 1, 0], 3));

/**
 * 다른 답
 * const solution=(a,i)=>a.indexOf(1,i);
 */
