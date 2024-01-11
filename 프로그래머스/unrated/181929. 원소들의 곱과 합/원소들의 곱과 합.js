function solution(num_list) {
    var answer = 0;
     let multiply = 1;
    for(let i =0; i<num_list.length; i++){
        multiply *= num_list[i]
        answer += num_list[i]  
    }
    
    answer = answer * answer
     return multiply < answer ? 1 : 0;
}