function solution(order) {
    var answer = 0
    let count = 0;
    answer = order.toString().split('')
    
    for(let i of answer){
        if(i === '3' || i ==='6' || i === '9'){
            count++
        }
    }
    return count;
}