function solution(num_list) {
   var answer = num_list.length >= 11 ? 0 : 1;
    for(let i = 0; i<num_list.length; i++){
        if(num_list.length >= 11){
            answer += num_list[i] 
            
            
        }else if(num_list.length <=10){
            answer *= num_list[i]
        }
    }
    return answer;
}