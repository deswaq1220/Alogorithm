function solution(s) {
    var answer = '';
    
    const arr = Array.from(s).sort().reverse().join("");
    
//     arr.sort(function(a,b){
//         if(a<b) return 1;
//         if(a>b) return -1;
//         if(a===b) return 0;
//     });
    
//     const str = arr.join("");
//     answer = str;
    
    return arr;
}