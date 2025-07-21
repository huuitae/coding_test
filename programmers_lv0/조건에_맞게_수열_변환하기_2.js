function solution(arr) {
  var answer = 0;
  let temp = [];

  while (true) {
    arr.forEach((el) => {
      if (el >= 50 && !(el % 2)) {
        temp.push(el / 2);
      } else if (el < 50 && el % 2) {
        temp.push(el * 2 + 1);
      } else {
        temp.push(el);
      }
    });
    console.log(temp);

    if (arr.every((el) => temp.includes(el))) {
      break;
    } else {
      arr = temp;
      temp = [];
      answer++;
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 100, 99, 98]));
