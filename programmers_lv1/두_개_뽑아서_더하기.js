function solution(numbers) {
  const combination = (comb, rests, output) => {
    if (comb.length === 2) {
      return output.push(comb);
    }

    rests.forEach((value, idx) => {
      const rest = rests.slice(idx + 1);
      combination([...comb, value], rest, output);
    });
  };

  let answer = [];
  const chooseTwice = [];
  combination([], numbers, chooseTwice);

  answer = chooseTwice.map(([a, b]) => a + b).sort((a, b) => a - b);
  return answer.filter((value, idx) => answer.indexOf(value) === idx);

  /**
   * 속도가 훨씬 빠름
   *  const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
   */
}

console.log(solution([2, 1, 3, 4, 1]));
