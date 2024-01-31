function solution(numbers) {
    var answer = 0;
    for(let i = 0; i<10; i++){
        if(numbers.indexOf(i) == -1){
            // indexOf는 숫자 i가 배열에 없는 경우 -1을 반환해줌
            // true인 경우 answer에 i를 더해준ㄷ아~!
            answer += i
        }
    }
    return answer;
}