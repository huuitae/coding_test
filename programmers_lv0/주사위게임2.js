function solution(a, b, c) {
    var answer = 0;
    let score = 0;
    let arr = [a, b, c];

    for (let i = 0; i < arr.length; i++) {
        let newArr = arr.filter((element) => element === arr[i]);
        
        if (newArr.length === 1) {
            score += 1;
        } else if (newArr.length === 2) {
            score += 2;
        } else {
            score += 3;
        }
    }

    if (score === 3) {
        return a + b + c;
    } else if (score === 5) {
        return (a + b + c) * (a*a + b*b + c*c);
    } else {
        return (a + b + c) * (a*a + b*b + c*c) * (a*a*a + b*b*b + c*c*c);
    }
}

// console.log(new Set([5, 3, 3]));

/**
 * set을 사용해서 중복된 숫자를 없애는 방법도 생각해보자
 */