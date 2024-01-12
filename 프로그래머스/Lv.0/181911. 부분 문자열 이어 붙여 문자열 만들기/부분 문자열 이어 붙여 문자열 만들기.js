function solution(my_strings, parts) {
    var answer = '';
    // let str1 = '';
    // let str2 = '';
    // let str3 = '';
    // let str4 = '';
    // for(let i = 0; i < my_strings.length; i++){
    //     str1 = my_strings[0].substring(parts[0][0], parts[0][1] + 1)
    //     str2 = my_strings[1].substring(parts[1][0], parts[1][1] + 1)
    //     str3 = my_strings[2].substring(parts[2][0], parts[2][1] + 1)
    //     str4 = my_strings[3].substring(parts[3][0], parts[3][1] + 1)
    //     answer = str1+str2+str3+str4
    // }
    
    for(let i = 0; i<my_strings.length; i++){
        let substr = my_strings[i].substring(parts[i][0],parts[i][1] + 1)
        answer += substr;
    }
    
    
    return answer;
}