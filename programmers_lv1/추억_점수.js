function solution(name, yearning, photo) {
  let obj = {};
  let answer = new Array(photo.length).fill(0);

  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }

  for (let i = 0; i < photo.length; i++) {
    for (let j = 0; j < photo[i].length; j++) {
      if (obj[photo[i][j]]) {
        answer[i] += obj[photo[i][j]];
      }
    }
  }

  return answer;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);

/**
 * 다른 답
 * function solution(name, yearning, photo) {
    return photo.map((v)=> v.reduce((a, c)=> a += yearning[name.indexOf(c)] ?? 0, 0))
}
 */
