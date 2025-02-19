function solution(numbers) {
    const number = {
        "zero" : "0",
        "one" : "1",
        "two" : "2",
        "three" : "3",
        "four" : "4",
        "five" : "5",
        "six" : "6",
        "seven" : "7",
        "eight" : "8",
        "nine" : "9"
    }
    let result = numbers;
    Object.keys(number).forEach(word => {
        result = result.replace(new RegExp(word, "g"), number[word])
    })
    
    
    
    
    return Number(result);
}