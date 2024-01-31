function solution(arr, divisor) {
    var answer = [];
    let num = 0;
    // 필터 메소드 사용해서 divisor로 나누어 떨어지는값 필터링
    answer = arr.filter(num => num % divisor === 0);
    // 만약에 앤써 배열에 아무것도 안들어 있으면 -1 push
    if(answer.length === 0) answer.push(-1);
    // 오름차순 정렬
    else answer.sort((a,b) => a - b)
    
    return answer;
}