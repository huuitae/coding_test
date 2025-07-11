function solution(num_list) {
  let odd = 0;
  let even = 0;
  num_list.forEach((el, idx) => {
    if (idx % 2) {
      odd += el;
    } else {
      even += el;
    }
  });

  return odd > even ? odd : even;
}

console.log(solution([4, 2, 6, 1, 7, 6]));
