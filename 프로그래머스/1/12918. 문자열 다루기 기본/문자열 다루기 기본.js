function solution(s) {
    var answer = true;
//     let regex = /^[0-9]*$/;
    
//     if(regex.test(s) && (4 == s.length || s.length == 6)){
//         // 정규표현식.test("문자열") => 문자열이 정규표현식과 매칭이되면 true 아니면 flase를 반환해준다
//         return true;
//     }else{
        
//         return false;
//     }
    
        const num = "0123456789"
    
    if(s.length == 4 || s.length == 6){
        for(let i = 0; i<s.length; i++){
            if(num.includes(s[i])){
                answer;
            }else{
                answer = false;
            }
        }
    }else{
        answer = false;
    }
    return answer;
    
    
}

    