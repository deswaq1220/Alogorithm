function solution(left, right) {
    var answer = 0;
    for (var i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
// 제곱근이 정수면 약수의 갯수는 홀수다............... 맬친,,,,