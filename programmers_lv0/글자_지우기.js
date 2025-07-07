function solution(my_string, indices) {
  var answer = my_string.split('');
  indices.forEach((el) => {
    answer[el] = '';
  });
  return answer.join('');
}

console.log(solution('apporoograpemmemprs', [1, 16, 6, 15, 0, 10, 11, 3]));
