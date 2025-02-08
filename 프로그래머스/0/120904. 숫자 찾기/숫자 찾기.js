function solution(num, k) {
    var answer = -1;
    let number = num.toString()
    answer = number.indexOf(k) === -1 ? -1 : number.indexOf(k) +1
    
    return answer;
}