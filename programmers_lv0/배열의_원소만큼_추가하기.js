function solution(arr) {
  var answer = [];
  arr.forEach((el) => {
    for (let i = 0; i < el; i++) {
      answer.push(el);
    }
  });
  return answer;
}

console.log(solution([5, 1, 4]));

/**
 * 다른 답
 * 
 * new Array(num)으로 num 길이의 배열을 생성
 * fill(num)으로 배열을 전부 다 num으로 채운다.
 * 기존의 리스트와 합친다.
function solution(arr) {
    return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}
 */
