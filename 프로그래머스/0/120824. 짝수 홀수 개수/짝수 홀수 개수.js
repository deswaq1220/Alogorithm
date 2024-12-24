function solution(num_list) {
    var answer = [];
    let evenNum= num_list.filter(x => x%2===0)
    let oddNum = num_list.filter(x => x%2 ===1)
    answer.push(evenNum.length, oddNum.length)
    return answer
}