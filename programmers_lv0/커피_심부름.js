function solution(order) {
  var answer = 0;
  const prices = {
    americano: 4500,
    cafelatte: 5000,
  };

  order.forEach((el) => {
    if (el.includes('cafelatte')) {
      answer += prices['cafelatte'];
    } else {
      answer += prices['americano'];
    }
  });
  return answer;
}

console.log(
  solution(['cafelatte', 'americanoice', 'hotcafelatte', 'anything'])
);

/**
 * reduce를 사용한 답
 * const solution = (order) => order.reduce((acc, cur) => acc + (cur.includes('latte') ? 5000 : 4500), 0)
 */
