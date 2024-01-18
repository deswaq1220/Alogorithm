function solution(arr) {
    var answer = 0;
    let avg = 0;
    // let avg = arr.reduce((prev,curr) => prev + curr,0) // reduce 메소드를 사용해서 배열의 모든 값을 합산해준다
    // answer = avg/arr.length // 배열 값 합산한거 나누기 배열 길이 
    
    for(let i = 0; i<arr.length; i++){
         avg += arr[i]
        answer =  avg/arr.length
    }
    return answer;
}