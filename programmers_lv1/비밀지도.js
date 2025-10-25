function solution(n, arr1, arr2) {
  return arr1.map((value, idx) => {
    const decrypt = (value | arr2[idx])
      .toString(2)
      .split("")
      .map((v) => (v === "1" ? "#" : " "))
      .join("");

    return decrypt.padStart(n, " ");
  });
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
