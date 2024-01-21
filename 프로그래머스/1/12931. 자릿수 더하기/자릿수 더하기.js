const solution = (n) => {
    let answer = 0
    let digits = n.toString().split("")// 주어진 숫자 n을 문자열로 반환 후 각 자릿수를 배열요소로 분리해준다 
    for(let i = 0; i<digits.length; i++){
        // 배열요소 순회
        answer += Number(digits[i]);
        // 배열요소 숫자로 변환 후 answer에 더해줌
    }
    return answer;
}
