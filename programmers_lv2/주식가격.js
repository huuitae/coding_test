function solution(prices) {
  var answer = [];

  for (let i = 0; i < prices.length; i++) {
    answer.push(0);

    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] >= prices[i]) {
        answer[i]++;
      } else {
        answer[i]++;
        break;
      }
    }
  }

  return answer;

  // 스택을 활용한 풀이
  // const answer = new Array(prices.length).fill(0);
  // const stack = [];
  // let length = prices.length;

  // for(let i = 0; i < length; i++) {
  //   while(stack.length && prices[i] < prices[stack[stack.length - 1]]) {
  //     let temp = stack.pop();
  //     answer[temp] = i - temp;
  //   }
  //   stack.push(i);
  // }

  // while(stack.length) {
  //   let temp = stack.pop();
  //   answer[temp] = length - temp - 1;
  // }

  // return answer;
}
