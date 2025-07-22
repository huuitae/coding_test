function solution(strArr) {
  strArr = strArr.map((el, idx) =>
    idx % 2 ? el.toUpperCase() : el.toLowerCase()
  );
  return strArr;
}

console.log(solution(['AAA', 'BBB', 'CCC', 'DDD']));
