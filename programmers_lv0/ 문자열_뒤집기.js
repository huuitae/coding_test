function solution(my_string, s, e) {
  var answer = '';
  let cut = my_string
    .split('')
    .slice(s, e + 1)
    .reverse()
    .join('');
  answer =
    my_string.slice(0, s) + cut + my_string.slice(e + 1, my_string.length);
  return answer;
}

console.log(solution('Progra21Sremm3', 6, 12));

/**
 * 한 줄에 표현
 * return my_string.slice(0,s) + my_string.slice(s,e + 1).split("").reverse().join("") + my_string.slice(e + 1);
 */
