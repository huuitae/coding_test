function solution(arr) {
  var answer = [];
  let temp = "";

  for (let i = 0; i < arr.length; i++) {
    if (temp === arr[i]) {
      continue;
    }
    answer.push(arr[i]);
    temp = arr[i];
  }
  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));

// filter 사용
return arr.filter((val, index) => val != arr[index + 1]);
