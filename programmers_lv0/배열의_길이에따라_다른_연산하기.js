function solution(arr, n) {
  arr = arr.map((el, idx) => {
    if (!(arr.length % 2)) {
      return idx % 2 ? el + n : el;
    } else {
      return !(idx % 2) ? el + n : el;
    }
  });
  return arr;
}

console.log(solution([49, 12, 100, 276, 33], 27));
console.log(solution([444, 555, 666, 777], 100));
