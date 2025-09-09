function solution(nums) {
  const half = Math.floor(nums.length / 2);
  const size = new Set(nums).size;

  return half < size ? half : size;
}

console.log(solution([3, 1, 2, 3]));
