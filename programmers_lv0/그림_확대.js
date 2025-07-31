function solution(picture, k) {
  var answer = [];

  for (let i = 0; i < picture.length; i++) {
    let temp = '';

    for (let j = 0; j < picture[i].length; j++) {
      temp += picture[i][j].repeat(k);
    }

    for (let m = 0; m < k; m++) {
      answer.push(temp);
    }
  }
  return answer;
}

console.log(
  solution(
    [
      '.xx...xx.',
      'x..x.x..x',
      'x...x...x',
      '.x.....x.',
      '..x...x..',
      '...x.x...',
      '....x....',
    ],
    2
  )
);

/**
 * reduce를 활용한 방법
 * function solution(picture, k) {
    var answer = [];

    picture.forEach((line) => {
        const expanded = [...line].reduce((acc, cur) => acc + cur.repeat(k), '');

        for(let i=0; i<k; i++) answer.push(expanded);
    });

    return answer;
}
 */
