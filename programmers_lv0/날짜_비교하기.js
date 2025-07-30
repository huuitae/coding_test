function solution(date1, date2) {
  let [year, mon, day] = date1;
  let [year2, mon2, day2] = date2;
  return new Date(`${year}-${mon}-${day}`) <
    new Date(`${year2}-${mon2}-${day2}`)
    ? 1
    : 0;
}

console.log(solution([2021, 12, 28], [2021, 12, 29]));

/**
 * 그냥 입력해도 되네? 근데 하루 늦은 날짜로 나오지만 둘 다 하루씩 늦기 때문에 비교할 때에는 문제 없을듯
 * return new Date(date1) < new Date(date2) ? 1 : 0;
 */
