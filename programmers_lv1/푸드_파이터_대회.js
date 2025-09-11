function solution(food) {
  var answer = "";
  for (let i = 1; i <= food.length; i++) {
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      answer += i;
    }
  }
  const rev = answer.split("").reverse().join("");
  return answer + "0" + rev;
}

/**
 * repeat() 사용
 * 
 * function solution(food) {
    let res = '';
    for (let i = 1; i < food.length; i++) {
        res += String(i).repeat(Math.floor(food[i]/2));
    }

    return res + '0' + [...res].reverse().join('');
}
 */

console.log(solution([1, 3, 4, 6]));
