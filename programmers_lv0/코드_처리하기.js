function solution(code) {
    let mode = 0;
    var answer = code.split('').map((value, idx) => {
        let ret = '';
        let evenValue = '';
        let oddValue = '';
        
        if (!Number(value)) {
            idx % 2 === 0 ? evenValue = value : oddValue = value;
        }
        
        if (value === "0" || value === "1") {
            mode = mode ? 0 : value;
        } 

        if (mode) {
            ret += oddValue;
        } else {
            ret += evenValue;
        }

        return ret;
    });

    return answer.join('') === '' ? "EMPTY" : answer.join('');
}

console.log(solution("abc1abc1abc"));

/**
 * 다른 답변
 * var answer = code.replaceAll("1","").split("").filter((val, idx)=> idx%2 === 0).join("");
    return answer.length > 0 ? answer : "EMPTY";
 */