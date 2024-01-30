const solution = (absolutes, signs) => {
    return absolutes
        .reduce((acc,curr,idx) => acc+curr * (signs[idx]?1:-1),0)
}

//acc: 누적된 합을 저장하는 변수
// curr : absolutes 배열의 현재 값
//idx : 현재 값의 인덱스

// initialValue = 0으로 설정해줌 이걸 제공하지 않으면 리듀스는 인덱스 1번부터 시작함

//signs[idx]는 signs배열의 idx번째 요소로 curr에 해당하는 부호를 나타내줌
// signs[idx] === true면 양수이므로 acc에 curr를 그대로 더해줌 
// signs[idx] === false면 음수이므로 acc에 curr * -1을 더해준다