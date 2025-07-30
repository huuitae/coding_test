function solution(str_list, ex) {
  str_list = str_list
    .filter((el) => {
      return !el.includes(ex);
    })
    .join('');
  return str_list;
}

console.log(solution(['abc', 'def', 'ghi'], 'ef'));
