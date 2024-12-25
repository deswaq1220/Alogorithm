function solution(my_string, letter) {
    var answer = '';
    
    let str = my_string.split('').filter(x => 
     x !== letter
    )
    
    return str.join('')
    
}