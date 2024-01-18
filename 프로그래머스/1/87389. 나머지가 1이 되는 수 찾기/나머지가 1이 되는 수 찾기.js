function solution(n) {
    var answer = 0;
    for(let x = 2; x < n; x++){ 
        // n이 1보다 크고 짝수가 아닐 때부터 시작해서 n까지 1씩 증가
        if(n%x === 1){ // n을 x로 나눈 나머지가 1인지 확인
            return answer = x;
            //참일 경우 answer에 x 저장
        } 
    }

}