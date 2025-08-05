function solution(s) {
  var answer = true;
  let pCount = 0;
  let yCount = 0;

  s.toLowerCase()
    .split('')
    .map((el) => {
      if (el === 'p') {
        pCount++;
      } else if (el === 'y') {
        yCount++;
      }
    });

  // return pCount === yCount || pCount + yCount === 0 ? true : false;
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
}

console.log(solution('pyY'));
