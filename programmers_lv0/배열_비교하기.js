function solution(arr1, arr2) {
  var answer = 0;
  if (arr1.length > arr2.length) {
    answer = 1;
  } else if (arr1.length < arr2.length) {
    answer = -1;
  } else {
    const addArr1 = arr1.reduce((acc, cur) => acc + cur);
    const addArr2 = arr2.reduce((acc, cur) => acc + cur);
    answer = addArr1 > addArr2 ? 1 : addArr1 < addArr2 ? -1 : 0;
  }
  return answer;
}

// console.log(solution([49, 13], [70, 11, 2]));
console.log(solution([100, 17, 84, 1], [55, 12, 65, 36]));
