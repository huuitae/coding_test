function solution(num_list) {
    let add = num_list.reduce((acc, cur) => acc + cur);
    let mul = num_list.reduce((acc, cur) => acc * cur);
    console.log(Math.pow(add, 2));
    return mul < Math.pow(add, 2) ? 1 : 0;
}

console.log(solution([3, 4, 5, 2, 1]))