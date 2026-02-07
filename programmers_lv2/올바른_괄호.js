function solution(s) {
  let stack = [];
  let cursor = 0;

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    cursor++;

    if (stack.length >= 2) {
      if (stack[cursor - 2] + stack[cursor - 1] === "()") {
        stack.pop();
        stack.pop();
        cursor -= 2;
      }
    }
  }

  return !stack.length;

  // 다른 풀이
  // let cum = 0
  // for (let paren of s) {
  //     cum += paren === '('? 1: -1
  //     if(cum < 0) {
  //         return false
  //     }
  // }
  // return cum === 0? true: false;
}
