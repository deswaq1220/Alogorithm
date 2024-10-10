function solution(n) {
    var answer = n
    .toString()
    .split("")
    .map(v => parseInt(v))
    .reduce((acc, cur) => acc + cur, 0);
    return answer;
}