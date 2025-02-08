function solution(array) {
    var answer = [];
    let maxNum = Math.max(...array)
    answer.push(maxNum)
    let maxIndex = array.indexOf(maxNum)
    answer.push(maxIndex)
   
    return  answer.sort((a,b) => b-a);
}