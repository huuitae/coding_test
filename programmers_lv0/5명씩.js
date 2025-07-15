function solution(names) {
  var answer = [];
  for (let i = 0; i < names.length; i += 5) {
    answer.push(names.slice(i, i + 5).shift());
  }
  return answer;
}

console.log(
  solution(['nami', 'ahri', 'jayce', 'garen', 'ivern', 'vex', 'jinx'])
);
