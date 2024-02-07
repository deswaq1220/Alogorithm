function solution(a, b) {

    
    let sum = a.map((item,index) => {
        return item * b[index]
    })
    
    let answer = sum.reduce((arr,curr) => arr+curr,0)

    return answer;
}