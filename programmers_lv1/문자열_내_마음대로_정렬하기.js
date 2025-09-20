function solution(strings, n) {
  return strings
    .sort()
    .map((value) => ({ str: value, char: value[n].charCodeAt() }))
    .sort((a, b) => a.char - b.char)
    .map((value) => value.str);

  // 다른 답
  //  return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}

console.log(solution(["sun", "bed", "car"], 1));
