function solution(n) {
    var answer = String(n).split("").reverse().map(Number)
    // String(n) : 자연수 n을 문자열로 반환해줌
    // .split(""): 문자열의 각 문자를 분리해서 배열로 만들어준다
    // .reveres(): 배열의 순서를 뒤집음
    // .map(number) : 배열을 순회하면서 number인 새로운 배열로 변환해준다!
    return answer;
}