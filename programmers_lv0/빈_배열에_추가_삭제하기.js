function solution(arr, flag) {
  var answer = [];
  arr.forEach((el, idx) => {
    if (flag[idx]) {
      answer = [...answer, ...new Array(el * 2).fill(el)];
    } else {
      for (let i = 0; i < el; i++) {
        answer.pop();
      }
    }
  });
  return answer;
}

console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false]));

/**
 * reduce로 풀기
 * function solution(arr, flag) {
  return arr.reduce(
    (prev, num, i) => (flag[i] ? [...prev, ...new Array(num * 2).fill(num)] : prev.slice(0, -num)),
    [],
  );
}
 */
