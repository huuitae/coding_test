function solution(n_str) {
  while (n_str.startsWith('0')) {
    n_str = n_str.substring(1, n_str.length);
  }
  return n_str;
}

console.log(solution('0010'));
