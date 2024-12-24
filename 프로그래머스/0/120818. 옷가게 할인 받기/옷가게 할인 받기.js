function solution(price) {
    var answer = 0;
    
    if(price >= 500000){
        answer = price * 0.2;
        return Math.floor(price - answer);
    }else if(price >= 300000){
        answer = price * 0.1;
        return Math.floor(price - answer);
    }else if(price >= 100000){
        answer = price * 0.05;
        return Math.floor(price - answer);
    }
    
    return price;
}