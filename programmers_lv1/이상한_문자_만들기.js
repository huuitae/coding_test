function solution(s) {
  return s
    .split(" ")
    .map((value) => {
      return value
        .split("")
        .map((str, idx) => (!(idx % 2) ? str.toUpperCase() : str.toLowerCase()))
        .join("");
    })
    .join(" ");
}

console.log(solution("  abc de   fghi   "));
