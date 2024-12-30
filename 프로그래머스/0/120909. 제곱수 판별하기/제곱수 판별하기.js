function solution(n) {
    var answer = 0;
    let a = Math.sqrt(n)
    return  Number.isInteger(a) ? 1 : 2;
}