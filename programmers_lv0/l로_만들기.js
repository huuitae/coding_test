function solution(myString) {
  var answer = '';
  myString = myString.split('').map((el) => (el < 'l' ? 'l' : el));
  return myString.join('');
}

console.log(solution('abcdevwxyz'));
