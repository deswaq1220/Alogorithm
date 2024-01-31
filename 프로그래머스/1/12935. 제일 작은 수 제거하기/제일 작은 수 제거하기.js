function solution(arr) {
    var answer = [];
    if(arr.length <= 1){
        return [-1]
    }
    
    let minValue = Math.min(...arr);
    let minIdx = arr.indexOf(minValue)
    arr.splice(minIdx,1)
    answer = arr
    return answer;
}