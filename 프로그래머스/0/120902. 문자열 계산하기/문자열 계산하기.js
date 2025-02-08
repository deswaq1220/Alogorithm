function solution(my_string) {
    let parts = my_string.split(' ')
    let answer = Number(parts[0])
    
    for(let i = 1; i < parts.length; i+=2){
        let operator = parts[i]
        let num = Number(parts[i+1])
        
        if(operator === "+"){
            answer += num
        }else {
            answer -= num
        }
    }
    return answer;
}