function solution(n, m) {
  const greatest = (a, b) => {
    if (b === 0) return a;
    return greatest(b, a % b);
  };
  const least = (a, b) => (a * b) / greatest(a, b);
  return [greatest(n, m), least(n, m)];
}
console.log(solution(10, 12));

/**
 * 유클리드 호제법. 주어진 값 중 큰 값을 a 작은 값을 b 라고 하고 a를 b로 나눈 나머지를 r 이라고 할 때,
 * a % b ... r
 * b % r ... r2
 * r % r2 ... r3
 *
 * 이 과정을 반복하면 나머지가 0이되는 순간이 오게된다.
 * 나머지를 0으로 만들어주는 나눠주는 수가 최대 공약수가 된다.
 *
 * 최소 공배수는 주어진 값 두 개를 곱하고 최대 공약수로 나누면 구할 수 있다.
 * */
