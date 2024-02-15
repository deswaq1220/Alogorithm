function solution(arr){
    var answer = [];
    answer.push(arr[0]); // arr의 첫 번째 요소를 answer에 추가
    for(let i = 1; i<arr.length; i++){
        if(answer[answer.length -1] !== arr[i]){
            answer.push(arr[i])
        }   
    }
    
    return answer;
}