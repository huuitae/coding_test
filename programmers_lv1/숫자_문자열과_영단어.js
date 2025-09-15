function solution(s) {
  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let numString = "";
  let range = 3;

  while (s.length > 0) {
    if (range > 6) range = 3;

    if (Number(s[0]) >= 0) {
      numString += s[0];
      s = s.slice(1);
    } else if (numbers[s.slice(0, range)] >= 0) {
      numString += numbers[s.slice(0, range)];
      s = s.slice(range);
    } else {
      range++;
    }
  }

  return Number(numString);
}

console.log(solution("23four5six7"));

/**
 * split을 통해 numbers 배열에 해당하는 값을 기준으로 자름
 * 그 값의 인덱스 번호를 기준으로 배열을 붙임
 * "one4seveneight" -> ["", "4seveneight"] -> "14seveneight"
 * 
 * function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}

console.log(solution("one4seveneight"))
 */
