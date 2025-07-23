function solution(my_string) {
  var answer = [];
  my_string = my_string.split(' ').filter((el) => el !== '');
  return my_string;
}

console.log(solution(' i    love  you'));
console.log(solution('    programmers  '));
