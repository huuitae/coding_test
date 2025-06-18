function solution(a, b) {
    let firstA = Number(a.toString().concat(b));
    let firstB = Number(b.toString() + a.toString());
    var answer = 0;
    
    if (firstA > firstB || firstA === firstB) {
        answer = firstA;
    } else {
        answer = firstB;
    }
    
    return answer;
}