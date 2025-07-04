function solution(my_string) {
  // var answer = [];
  // const alphabets = [
  //   'A',
  //   'B',
  //   'C',
  //   'D',
  //   'E',
  //   'F',
  //   'G',
  //   'H',
  //   'I',
  //   'J',
  //   'K',
  //   'L',
  //   'M',
  //   'N',
  //   'O',
  //   'P',
  //   'Q',
  //   'R',
  //   'S',
  //   'T',
  //   'U',
  //   'V',
  //   'W',
  //   'X',
  //   'Y',
  //   'Z',
  //   'a',
  //   'b',
  //   'c',
  //   'd',
  //   'e',
  //   'f',
  //   'g',
  //   'h',
  //   'i',
  //   'j',
  //   'k',
  //   'l',
  //   'm',
  //   'n',
  //   'o',
  //   'p',
  //   'q',
  //   'r',
  //   's',
  //   't',
  //   'u',
  //   'v',
  //   'w',
  //   'x',
  //   'y',
  //   'z',
  // ];

  // my_string.split('').forEach((el) => {
  //   alphabets.forEach((alphabet, idx) => {
  //     let value = answer[idx] >= 0 ? answer[idx] : 0;

  //     if (el === alphabet) {
  //       answer[idx] = value++;
  //     } else {
  //       answer[idx] = value;
  //     }
  //   });
  //   console.log(answer);
  // });
  // return answer;

  let al = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let a = [];
  a.length = 52;
  a.fill(0);

  my_string.split('').map((n) => {
    a[al.indexOf(n)] += 1;
  });

  return a;
}

console.log(solution('Programmers'));
