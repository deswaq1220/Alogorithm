function solution(rsp) {
    let winningNum = {
       '2': '0',  // 가위를 이기는 건 바위
        '0': '5',  // 바위를 이기는 건 보
        '5': '2'   // 보를 이기는 건 가위
    }
    let strarry = rsp.split('')
    let result =[]
    for(const winning of strarry){
        if(winning === '2') {
           result.push(winningNum['2'])
        }else if(winning === '0') {
             result.push(winningNum['0']) 
        }else if(winning === '5') {
             result.push(winningNum['5']) 
        } 
    }
    return result.join('')
}