function solution(n, control) {
  let arr = control.split('');
  arr.map((value, idx) => {
    switch (value) {
      case 'w':
        n += 1;
        break;
      case 's':
        n -= 1;
        break;
      case 'd':
        n += 10;
        break;
      case 'a':
        n -= 10;
        break;
      default:
        break;
    }
  });
  return n;
}

console.log(solution(0, 'wsdawsdassw'));
