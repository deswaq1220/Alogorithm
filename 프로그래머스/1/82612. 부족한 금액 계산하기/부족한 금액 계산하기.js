function solution(price, money, count) {
    var total = 0;
    for( let i =1; i<=count; i++){
        total += price * i;
    }
    
    return money > total ? 0: total - money
}