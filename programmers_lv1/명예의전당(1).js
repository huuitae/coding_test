function solution(k, score) {
  var answer = [];
  let arr = [];

  for (let i = 0; i < score.length; i++) {
    if (arr.length < k) {
      arr.push(score[i]);
      arr.sort((a, b) => a - b);
      answer.push(Math.min(...arr));
    } else {
      arr[0] = arr[0] > score[i] ? arr[0] : score[i];
      // 일단 넣고 shift() 사용해서 제일 낮은 값 빼버리기
      // arr.push(score[i]);
      arr.sort((a, b) => a - b);
      // arr.shift();
      answer.push(Math.min(...arr));
    }
  }
  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
