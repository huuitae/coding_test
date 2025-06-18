function solution(str1, str2) {
    let firstWord = str1.split('');
    let secWord = str2.split('');
    var answer = '';
    
    for (let i = 0; i < secWord.length; i++) {
        answer += firstWord[i] + secWord[i];
        console.log(answer);
    }
    
    return answer;
}

/**
 * 다른 풀이
 * return [...str1].map((x, idx)=> x+str2[idx]).join("");
 */