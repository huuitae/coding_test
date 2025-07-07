function solution(n, slicer, num_list) {
  let answer = [];

  switch (n) {
    case 1:
      answer = num_list.slice(0, slicer[1] + 1);
      break;
    case 2:
      answer = num_list.slice(slicer[0]);
      break;
    case 3:
      answer = num_list.slice(slicer[0], slicer[1] + 1);
      break;
    case 4:
      for (let i = slicer[0]; i <= slicer[1]; i += 2) {
        answer.push(num_list[i]);
      }
      break;
  }

  return answer;
}

console.log(solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));

/**
 * let [a, b, c] = slicer; 로 인덱스 번호를 안쓸 수 있음
 */

/**
 * 이런 식으로도 가능
 * const slices = {
  1: (num_list, [a, b, c]) => num_list.slice(0, b + 1),
  2: (num_list, [a, b, c]) => num_list.slice(a),
  3: (num_list, [a, b, c]) => num_list.slice(a, b + 1),
  4: (num_list, [a, b, c]) => num_list.slice(a, b + 1).filter((_, i) => i % c === 0),
};

function solution(n, slicer, num_list) {
  return slices[n](num_list, slicer);
}
 */
