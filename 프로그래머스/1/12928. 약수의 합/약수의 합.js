function solution(n) {
    var answer = 0;
    for(let i = 1; i<= n; i++){
        //정수n만큼 i는 1씩 증가
        if(n%i === 0){
            // 정수n을 i로 나눴을때 나머지가 0인것만 더하기
            answer += i
        }
    }
    return answer;
}