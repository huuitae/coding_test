function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, idx) => {
    if (!signs[idx]) {
      cur *= -1;
    }
    return acc + cur;
  }, 0);
}

console.log(solution([4, 7, 12], [true, false, true]));
