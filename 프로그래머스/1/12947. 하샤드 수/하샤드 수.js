function solution(x) {
    var answer = true
    // 정수를 문자열 배열로 만들어준다
    let StringArr = String(x).split("")
    // 맵으로 배열 순회해서 정수타입 배열로 만들어준다
    let numArr = StringArr.map((ele) => Number(ele))
    // reduce를 사용해 배열 값을 더해준다
    let numTotal = numArr.reduce((acc,curr) => acc+ curr)
    // 삼항연산자 이용으로 배열값을 다 더한 값에 x를 나눴을 때 나머지가 0이면 true 아니면 False 반환
    answer = x%numTotal === 0 ? true : false
    
    
    return answer;
}