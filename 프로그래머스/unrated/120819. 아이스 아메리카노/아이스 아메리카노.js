function solution(money) {
    var answer = [];
    let coffee = 0;
    let change = 0;
    if(5500 <= money){
         coffee = parseInt(money/5500); 
         change = (money%5500);
    }else{
         coffee = 0;
         change = money;
    }
    answer[0] = coffee;
    answer[1] = change
    return answer;
}