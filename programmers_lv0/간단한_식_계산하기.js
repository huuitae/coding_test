function solution(binomial) {
  var answer = 0;
  const splitStr = binomial.split(' ');
  console.log(splitStr);

  switch (splitStr[1]) {
    case '+':
      answer = Number(splitStr[0]) + Number(splitStr[2]);
      break;
    case '-':
      answer = Number(splitStr[0]) - Number(splitStr[2]);
      break;
    case '*':
      answer = Number(splitStr[0]) * Number(splitStr[2]);
      break;
    case '/':
      answer = Number(splitStr[0]) / Number(splitStr[2]);
      break;
    default:
      break;
  }
  return answer;
}

console.log(solution('43 + 12'));

/**
 * 다른 답
 * const ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

function solution(binomial) {
  const [a, op, b] = binomial.split(' ');
  return ops[op](+a, +b);
}
 */
