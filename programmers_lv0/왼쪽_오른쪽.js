function solution(str_list) {
  const index = str_list.findIndex((el) => el === 'l' || el === 'r');
  console.log(index);
  if (index === -1) {
    return [];
  } else if (str_list[index] === 'l') {
    return str_list.slice(0, index);
  } else {
    return str_list.slice(index + 1);
  }
}

console.log(solution(['u', 'u', 'l', 'r']));
