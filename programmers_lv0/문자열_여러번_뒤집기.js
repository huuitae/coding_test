function solution(my_string, queries) {
  var answer = '';
  queries.forEach(([a, b]) => {
    let revString = my_string
      .split('')
      .slice(a, b + 1)
      .reverse()
      .join('');
    let first = my_string.slice(0, a);
    // console.log(first);
    // console.log(revString);
    let end = my_string.slice(b + 1, my_string.length + 1);
    // console.log(end);
    my_string = first + revString + end;
  });
  return my_string;
}

console.log(
  solution('rermgorpsam', [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
);

/**
 * 다른 답
 * function solution(my_string, queries) {
    let str = my_string.split('');
  queries.forEach(([start, end]) => {
    const changeStr = str.slice(start, end + 1);
    str.splice(start, changeStr.length, ...changeStr.reverse());
  });
  return str.join('');
}
 */
