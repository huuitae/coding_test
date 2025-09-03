function solution(s, n) {
  return s
    .split("")
    .map((value) => {
      if (value !== " ") {
        let ascii = value.charCodeAt();

        if (ascii >= 97) {
          return String.fromCharCode(((ascii - 97 + n) % 26) + 97);
        } else {
          return String.fromCharCode(((ascii - 65 + n) % 26) + 65);
        }
      } else {
        return " ";
      }
    })
    .join("");
}

console.log(solution("a B z", 4));
console.log(solution("   z", 1));
console.log(solution("Zz", 2));
console.log(solution("AaZz", 2));
console.log(solution("xyz", 3));
console.log(((121 - 97 + 4) % 26) + 97);
