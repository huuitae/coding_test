function solution(num_list) {
  var answer = 0;
  num_list.forEach((el) => {
    console.log(el.toString(2).length);

    while (!(el === 1)) {
      if (!(el % 2)) {
        el = el / 2;
        answer++;
      } else if (el % 2) {
        el = (el - 1) / 2;
        answer++;
      }
    }
  });
  return answer;
}

console.log(solution([12, 4, 15, 1, 14]));

/**
 * 신박한 답
 * function solution(num_list) {
    return num_list.map(v => v.toString(2).length - 1).reduce((a, c) => a + c);
}
 */
