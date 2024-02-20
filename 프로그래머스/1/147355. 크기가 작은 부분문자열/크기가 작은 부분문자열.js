function solution(t, p) {
    var answer = 0;
    let pNum = parseInt(p)
    
    for(let i = 0; i<= t.length - p.length; i++){
        if(parseInt(t.substr(i,p.length)) <= pNum) answer++
    }
    return answer;
}