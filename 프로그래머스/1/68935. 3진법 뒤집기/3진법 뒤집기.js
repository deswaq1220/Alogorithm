function solution(n) {
    var answer = 0;
    
// 1. 입력받은 수를 toString(3)
// 2. split("")
// 3. reverse()
// 4. 배열이므로 join("") -> 참고로 join()은 배열 사이에 쉼표가 들어가게된다.
// 5. parseInt( , 3)

    answer = n.toString(3).split('').reverse().join('')
    
    answer = parseInt(answer,3)
    
    
    return answer;
}