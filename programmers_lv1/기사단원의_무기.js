function solution(number, limit, power) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    let count = 0;
    // console.log("i: ", i);

    for (let j = 1; j <= Math.sqrt(i); j++) {
      // console.log("sqrt: ", Math.sqrt(i));

      if (i % j === 0) {
        // console.log("pow: ", Math.pow(j, 2));

        if (Math.pow(j, 2) === i) {
          count += 1;
        } else {
          count += 2;
        }
      }
    }
    // console.log("-------------------------------------");
    if (count <= limit) {
      answer += count;
    } else {
      answer += power;
    }
  }

  return answer;
}

console.log(solution(10, 3, 2));
