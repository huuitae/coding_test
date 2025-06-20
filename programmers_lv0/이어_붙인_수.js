function solution(num_list) {
    let oddArr = num_list.filter((el) => el % 2 !== 0);
    let evenArr = num_list.filter((el) => el % 2 === 0);
    var answer = Number(oddArr.join('')) + Number(evenArr.join(''));
    return oddArr;
}

console.log(solution([3, 4, 5, 2, 1]));

/**
 * 다른 답안 */
// let numList = [3, 4, 5, 2, 1];
// let oddArr2 = numList.filter((el) => el % 2 !== 0).reduce((acc, cur) => acc + cur, '');
// let evenArr2 = numList.filter((el) => el % 2 === 0).reduce((acc, cur) => acc + cur, '');
// console.log(Number(oddArr2) + Number(evenArr2));


 