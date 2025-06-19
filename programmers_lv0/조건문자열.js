function solution(ineq, eq, n, m) {
    var answer = 0;

    if (eq === "=") {
        if (ineq === "<") {
            answer = n <= m ? 1 : 0;
        } else {
            answer = n >= m ? 1 : 0;
        }
        return answer;

    } else if (eq === "!") {
        if (ineq === "<") {
            answer = n < m ? 1 : 0;
        } else {
            answer = n > m ? 1 : 0;
        }
        return answer;
    }
}

console.log(solution(">", "!", 41, 78));
console.log(solution("<", "=", 20, 50));

/**
 * 다른 답안
 * const operations = {
  '>=': (n, m) => n >= m,
  '<=': (n, m) => n <= m,
  '>!': (n, m) => n > m,
  '<!': (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}

 */