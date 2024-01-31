function solution(phone_number) {
    var answer = '';
    

    if(phone_number.length==4) return phone_number
    for(let i = 0; i<phone_number.length -4; i++){
        phone_number = phone_number.replace(phone_number[i], '*')
        answer = phone_number;
    }

   
    return answer;
}