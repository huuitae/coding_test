function solution(progresses, speeds) {
  let answer = [];
  let count = 0;

  while (progresses.length) {
    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }

    if (count > 0) {
      answer.push(count);
      count = 0;
    }
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
