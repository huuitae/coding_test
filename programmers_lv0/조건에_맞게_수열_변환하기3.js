function solution(arr, k) {
  var answer = [];
  answer = arr.map((el) => (k % 2 ? el * k : el + k));
  return answer;
}
