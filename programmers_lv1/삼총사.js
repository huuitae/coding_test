function solution(number) {
  // 조합 알고리즘
  const combination = (comb, rests, output) => {
    if (comb.length === 3) {
      return output.push(comb);
    }
    rests.forEach((v, idx) => {
      const rest = rests.slice(idx + 1);
      combination([...comb, v], rest, output);
    });
  };

  const output = [];
  combination([], number, output);

  return output.filter(
    (value) => value.reduce((acc, cur) => acc + cur, 0) === 0
  ).length;
}

console.log(solution([-2, 3, 0, 2, -5]));
