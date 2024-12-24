function solution(money) {
    var answer = [];
    let count = Math.floor(money/5500)
    let result = money - (5500 * count)
    answer.push(count,result)
    return answer;
}