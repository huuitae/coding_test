function solution(arr) {
  const newLength = Math.pow(2, Math.ceil(Math.log2(arr.length)));
  return [...arr, ...new Array(newLength - arr.length).fill(0)];
}

console.log(solution([1, 2, 3, 4, 5, 6]));
