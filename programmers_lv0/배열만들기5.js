function solution(intStrs, k, s, l) {
  var answer = [];

  intStrs.forEach((el) => {
    let cutting = Number(el.slice(s, s + l));
    if (cutting > k) {
      answer.push(cutting);
    }
  });

  return answer;
}

console.log(
  solution(['0123456789', '9876543210', '9999999999999'], 50000, 5, 5)
);
