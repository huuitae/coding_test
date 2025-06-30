function solution(arr) {
  var stk = [];
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0) {
      stk.push(arr[i]);
    } else {
      temp = stk;
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
      } else {
        stk.pop();
        i--;
      }
    }
  }

  return stk;
}

console.log(solution([1, 4, 2, 5, 3]));
