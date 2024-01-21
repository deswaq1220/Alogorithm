function solution(s){
    var answer = true;
    let string = s.toLowerCase(); // 전달된 문자열 s를 모두 소문자로 변환해서 대소문자 구별 없이 만들어줌
    let p = 0; // 갯수 저장용
    let y = 0; // 동일
    
    for(let i = 0; i<string.length; i++){ // 문자열 순회
        if(string.charAt(i) === 'p'){
            p++; // charAt을 사용해서 문자열 인덱스마다 p랑 같은지 비교하고 같으면 증가
        }else if(string.charAt(i) === 'y'){
            y++; // 동일
        }
        
    }
     if(p!==y){ // 문자 확인 후 p와 y의 갯수가 다르면 false 반환
            answer = false
        }

    
    return answer;
}