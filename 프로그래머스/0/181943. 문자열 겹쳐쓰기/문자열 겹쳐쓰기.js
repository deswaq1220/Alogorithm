function solution(my_string, overwrite_string, s) {
    let before = my_string.slice(0,s)
    let middle = overwrite_string
    let affter = my_string.slice(s + overwrite_string.length)
    
    

    return before + middle + affter;
}