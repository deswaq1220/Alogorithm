function solution(n) {
    // Number.isInteger() 메서드는 주어진 값이 정수인지 판별
    //Math.sqrt() 함수는 숫자의 제곱근을 반환 
    // 정수인지 판별 후 제곱근 계산
    let square = Number.isInteger(Math.sqrt(n))
    
    //Math.pow()**a^b처럼 a 에 b를 제곱한 값을 반환
    //Math.pow(a, b);
    let answer = square ? Math.pow(Math.sqrt(n) +1,2): -1;
    //예)n이 4라면 Math.sqrt(n)는 2이고 2에 +1하면 3이됨 
    //3의의 제곱은 9이다..!
    
    
    return answer;
}