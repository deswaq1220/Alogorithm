function solution(n) {
    let pizza = 6;
    
    while(true){
        if(pizza % n === 0 && pizza % 6 === 0){
            return pizza;
            pizza++
        }
        break
    }
    return (pizza/6)

}