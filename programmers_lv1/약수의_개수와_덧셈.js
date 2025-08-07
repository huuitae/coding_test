function solution(left, right) {
  var answer = 0;

  for (left; left <= right; left++) {
    let count = 0;

    for (let j = 1; j <= left; j++) {
      if (!(left % j)) count++;
    }

    if (count % 2) {
      answer -= left;
    } else {
      answer += left;
    }
  }
  return answer;
}

console.log(solution(13, 17));
