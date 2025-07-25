function solution(arr, k) {
  var answer = new Array(k).fill(-1);

  arr = arr.filter((el, idx) => {
    return arr.indexOf(el) === idx;
  });

  for (let i = 0; i < answer.length; i++) {
    if (i >= arr.length) {
      break;
    }
    answer[i] = arr[i];
  }
  return answer;
}

console.log(solution([0, 1, 1, 1, 1], 4));

console.log(solution([0, 1, 1, 2, 2, 3], 3));

/**
 * 다른 답
 * function solution(arr, k) {
  const set = new Set(arr);
  return set.size < k ? [...set, ...Array(k - set.size).fill(-1)] : [...set].slice(0, k);
}
 */
