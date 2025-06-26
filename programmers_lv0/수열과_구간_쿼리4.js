function solution(arr, queries) {
  var answer = [...arr];

  // queries.forEach(([s, e, k]) => {
  //   answer.slice(s, e + 1).forEach((el, idx) => {
  //     if (idx % k === 0) {
  //       answer[idx] += 1;
  //     }
  //   });
  // });

  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];
    for (let j = s; j <= e; j++) {
      if (j % k === 0) {
        arr[j]++;
      }
    }
  }

  return arr;
}

console.log(solution([1, 2, 3], [[1, 2, 2]]));
