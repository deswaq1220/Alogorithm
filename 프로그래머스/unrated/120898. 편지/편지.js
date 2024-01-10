function solution(message) {
    var answer = 0;
    let count = 0;
    for(let i = 1; i<=message.length; i++){
        count++;
        answer = count*2
    }
    return answer;
}