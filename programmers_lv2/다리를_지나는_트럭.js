function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridgeSum = 0; // 다리에 올라간 트럭 무게
  let bridge = Array.from({ length: bridge_length }).fill(0); // 현재 다리 상태

  // 먼저 다리에 트럭이 올라간다.
  answer++;
  bridgeSum = truck_weights[0];
  bridge.push(truck_weights.shift());
  bridge.shift();

  while (bridgeSum) {
    answer++;
    bridgeSum -= bridge.shift();

    if (truck_weights.length && bridgeSum + truck_weights[0] <= weight) {
      bridgeSum += truck_weights[0];
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
  }

  return answer;
}
