function solution(participant, completion) {
  // 방법 1
  // let obj = completion.reduce(
  //   (obj, cur) => ((obj[cur] = obj[cur] ? obj[cur] + 1 : 1), obj),
  //   {}
  // );

  // return participant.find((key) => {
  //   if (obj[key]) obj[key] = obj[key] - 1;
  //   else return key;
  // });

  // 방법 2
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    map.set(participant[i], (map.get(participant[i]) || 0) + 1);
    map.set(completion[i], (map.get(completion[i]) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "";
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
