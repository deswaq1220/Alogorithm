function solution(n) {
    var answer = 0;

    
    n = String(n)
        .split("")
        .sort((a,b) => b-a)
        .join('')
    answer = Number(n)
        
    return answer;
}