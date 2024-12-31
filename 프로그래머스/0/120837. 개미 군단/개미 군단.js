function solution(hp) {
    var answer = 0;
    let a = Math.floor(hp/5); // 장군개미
    let remainder = hp % 5 // 5로 나누고 남은 값
    let b = Math.floor(remainder/3) // 병정개미
    remainder = remainder % 3 // 3으로 나누고 남은 값
    let c = remainder // 일개미

    return a+b+c;
}