function solution(a, b) {
  // let big;
  // let small;
  // if (a > b) {
  //   big = a;
  //   small = b;
  // } else {
  //   big = b;
  //   small = a;
  // }

  // for (let i = small; i <= big; i++) {
  //   answer += i;
  // }
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

console.log(solution(3, 5));
