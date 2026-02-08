function solution(priorities, location) {
  let answer = 0;
  let position = [];

  for (let i = 0; i < priorities.length; i++) {
    position.push(i);
  }

  while (priorities.length) {
    let maxValue = Math.max(...priorities);

    if (priorities[0] < maxValue) {
      priorities.push(priorities.shift());
      position.push(position.shift());
    } else {
      answer++;
      priorities.shift();

      if (position.shift() === location) return answer;
    }
  }
}
