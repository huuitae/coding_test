function solution(strArr) {
  var answer = [];
  // strArr.forEach((el) => {
  //   if (!el.includes('ad')) answer.push(el);
  // });
  // return answer;
  strArr = strArr.filter((el) => !el.includes('ad'));
  return strArr;
}

console.log(solution(['and', 'notad', 'abcd']));
