function solution(my_string, n) {
    
    const words = my_string.split('')
    const value = words.map(word => word.repeat(n)).join("")
    
    return value;
}