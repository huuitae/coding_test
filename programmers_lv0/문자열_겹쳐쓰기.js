function solution(my_string, overwrite_string, s) {
    let changeString = my_string.split('');
        
    for(let i = 0; i < overwrite_string.length; i++) {
        changeString[s] = overwrite_string[i];
        s++;
    }
    
    var answer = changeString.join('');
    return answer;
}

/** 다른 풀이
 * return my_string.slice(0,s)+overwrite_string+my_string.slice(s+overwrite_string.length);
 */