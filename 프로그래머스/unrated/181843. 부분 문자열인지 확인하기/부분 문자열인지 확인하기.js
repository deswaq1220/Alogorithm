function solution(my_string, target) {
    var answer = 0;
    
    const isNeedle = my_string.includes(target);
    if(isNeedle){
        answer = 1;
    }else{
        answer = 0;
    }
    return answer;
}