function solution(x) {
  return x % (x + '').split('').reduce((acc, cur) => acc + Number(cur), 0)
    ? false
    : true;
}

console.log(solution(11));
