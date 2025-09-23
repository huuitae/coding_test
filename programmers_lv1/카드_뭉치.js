function solution(cards1, cards2, goal) {
  // const addCards = [cards1[0], ...cards2, ...cards1.slice(1)];
  // const addCards2 = [cards2[0], ...cards1, ...cards2.slice(1)];

  // return goal.every((value, idx) => value === addCards[idx])
  //   ? "Yes"
  //   : goal.every((value, idx) => value === addCards2[idx])
  //   ? "Yes"
  //   : "No";

  let i = 0;
  let j = 0;
  let isProblem = false;

  goal.forEach((word) => {
    if (word === cards1[i]) {
      i++;
    } else if (word === cards2[j]) {
      j++;
    } else {
      isProblem = true;
      return;
    }
  });

  return isProblem ? "No" : "Yes";
}

console.log(
  solution(["i", "see", "to"], ["you", "now", "me"], ["i", "see", "now", "me"])
);
