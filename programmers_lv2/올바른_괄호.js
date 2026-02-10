function solution(s) {
  let check = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? check++ : check--;

    if (check < 0) return false;
  }

  return check === 0;

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
