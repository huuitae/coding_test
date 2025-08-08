function solution(price, money, count) {
  var answer = 0;
  for (let i = 1; i <= count; i++) {
    answer += price * i;
  }
  return money - answer < 0 ? Math.abs(money - answer) : 0;
}

console.log(solution(3, 20, 4));
