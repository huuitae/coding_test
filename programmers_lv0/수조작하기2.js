function solution(numLog) {
  var answer = '';
  let prev = 0;

  for (let i = 0; i < numLog.length; i++) {
    switch (numLog[i]) {
      case prev + 1:
        answer += 'w';
        break;
      case prev - 1:
        answer += 's';
        break;
      case prev + 10:
        answer += 'd';
        break;
      case prev - 10:
        answer += 'a';
        break;
      default:
        answer += '';
        break;
    }

    prev = numLog[i];
  }

  return numLog.slice(1);
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));

/**
 * 다른 답
 * const convert = {
        '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
    };

    return numLog.slice(1).map((v, i) => {
        return convert[v - numLog[i]]
    }).join('')
 */
