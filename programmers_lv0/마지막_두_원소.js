function solution(num_list) {
  let last = num_list.pop();
  let beforeLast = num_list.pop();

  if (last > beforeLast) {
    num_list.push(beforeLast);
    num_list.push(last);
    num_list.push(last - beforeLast);
  } else {
    num_list.push(beforeLast);
    num_list.push(last);
    num_list.push(last * 2);
  }

  return num_list;
}

console.log(solution([5, 2, 1, 7, 5]));

/**
 * 다른 답안
 * const [a, b] = [...num_list].reverse();  배열 구조를 거꾸로 바꾼 다음 0, 1번 요소를 a, b에 대입
    return [...num_list, a > b ? (a-b):a*2];  
 */
