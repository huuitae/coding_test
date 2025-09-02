function solution(sizes) {
  let mw = 0;
  let mh = 0;

  sizes.forEach(([w, h]) => {
    mw = Math.max(mw, w, h);
    mh = Math.max(mh, Math.min(w, h));
  });

  return mw * mh;
}

/**
 * 명함은 가로, 세로 상관없이 회전시킬 수 있다.
 * 따라서 가로 길이는 가장 큰 값.
 * 세로 길이는 가장 작은 값 중에서 가장 큰 값을 구해야 명함 케이스의 최소 사이즈를 구할 수 있다.
 */

console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
