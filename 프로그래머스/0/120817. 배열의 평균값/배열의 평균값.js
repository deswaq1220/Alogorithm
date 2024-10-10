function solution(numbers) {
    var answer = numbers.reduce((acc,cur) => acc+cur,0);
    let value = answer/numbers.length
    return value;
}