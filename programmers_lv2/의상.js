function solution(clothes) {
  const map = new Map();

  clothes.forEach(([v, k]) => {
    map.set(k, (map.get(k) ?? 0) + 1);
  });

  return (
    [...map.values()].reduce((acc, cur) => {
      return acc * (cur + 1);
    }, 1) - 1
  );
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);

/**
 * 마지막 reduce에서 (cur + 1)은 옷을 안입은 경우를 포함한다.
 * 1. yellow_hat
 * 2. green_turban
 * 3. 안입음
 *
 * 그리고 reduce문 종료 후 -1을 해주는 이유는 모든 옷을 안입는 경우를 제외하기 위함이다.
 * (yellow_hat)
 * (green_turban)
 * (yellow_hat + green_turban)
 * (yellow_hat + blue_sunglasses)
 * (green_turban + blue_sunglasses)
 * (안입음 + 안입음) -> 얘는 제외해야함!
 */
