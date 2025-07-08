function solution(arr, query) {
  query.forEach((el, idx) => {
    if (idx % 2 === 0) {
      arr.splice(el + 1);
      console.log(arr);
    } else {
      arr.splice(0, el);
      console.log(arr);
    }
  });
  return arr;
}

console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2]));
