function solution(a, d, included) {
    var answer = included.map((val, idx) => {
        let count = 0;
        val ? count += a : count += 0;
        a += d;
        return count;
    });
    
    return answer.reduce((a, b) => a + b);
}

console.log(solution(3, 4, [true, false, false, true, true]));

/**
 * 다른 답안
 * return included.reduce((acc, flag, i) => {
        return flag ? acc + a + d * i : acc
    }, 0)
 */