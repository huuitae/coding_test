function solution(a, b) {
    let mul = 2 * a * b;
    let aPlusB = Number(a.toString() + b.toString());
    var answer = 0;
    
    if (mul > aPlusB) {
        answer = mul;
    } else if (mul === aPlusB) {
        answer = aPlusB;
    } else {
        answer = aPlusB;
    }
    
    return answer;
}