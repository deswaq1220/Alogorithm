function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let numer = (numer1*denom2)+ (numer2*denom1)
    let denom = (denom1*denom2)
    
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
    let gcdValue = gcd(numer,denom)
    numer = numer/gcdValue
    denom = denom/gcdValue
    
    answer.push(numer,denom)

    return answer;
}