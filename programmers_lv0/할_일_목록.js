function solution(todo_list, finished) {
  var answer = [];
  finished.forEach((el, idx) => {
    if (!el) {
      answer.push(todo_list[idx]);
    }
  });
  return answer;
}

console.log(
  solution(
    ['problemsolving', 'practiceguitar', 'swim', 'studygraph'],
    [true, false, true, false]
  )
);

/**
 * filter 사용
 *  var answer = [];
    return todo_list.filter((e,i) => !finished[i]);
 */
