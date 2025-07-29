function solution(rank, attendance) {
  var answer = 0;
  let temp = [];
  temp = rank
    .map((el, idx) => {
      if (attendance[idx]) {
        return (temp[idx] = el);
      }
    })
    .sort((a, b) => a - b);

  for (let i = 0; i < 3; i++) {
    temp[i] = rank.indexOf(temp[i]);
  }

  answer = 10000 * temp[0] + 100 * temp[1] + temp[2];

  return answer;
}

console.log(
  solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])
);
