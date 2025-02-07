function solution(s) {
    var answer = '';
    let count = {}
    
    for(let char of s){
        count[char] = (count[char] || 0) +1
    }
    
   answer = Object.keys(count).filter(char => count[char] === 1).sort().join("")
    
    return answer;
}