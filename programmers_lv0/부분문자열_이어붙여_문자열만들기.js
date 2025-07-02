function solution(my_strings, parts) {
  var answer = '';

  parts.forEach(([s, e], idx) => {
    answer += my_strings[idx].slice(s, e + 1);
  });

  return answer;
}

console.log(
  solution(
    ['progressive', 'hamburger', 'hammer', 'ahocorasick'],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
);
