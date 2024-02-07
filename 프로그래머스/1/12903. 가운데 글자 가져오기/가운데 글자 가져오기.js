function solution(s) {
    var answer = '';
    if(s.length%2 === 0){
        answer = s[s.length/2 -1] + s[s.length/2] 
        // 대괄호는 문자열의 특정 인덱스에 위치한 문자를 가져오려고 사용
    }else{
        answer = s[Math.floor(s.length/2)]
    }
    return answer;
}