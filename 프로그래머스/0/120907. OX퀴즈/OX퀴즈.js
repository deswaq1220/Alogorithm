function solution(quiz) {
    let answer =[]
    
    quiz.map((equation) => {
       let parts = equation.split(' ') 
       let operator = parts[1]
       let num1 = Number(parts[0])
       let num2 = Number(parts[2])
       let result = 0
       if(operator === "+"){
           if(num1+num2 === Number(parts[4])){
              answer.push('O')
           }else{
              answer.push('X')
           }
       }else if(operator === "-"){
           if(num1-num2 === Number(parts[4])){
               answer.push('O')
           }else{
               answer.push('X')
           }
       }
    })
    return answer;
}