function solution(sides) {
    
    sides.sort((a,b) => a-b)
    if(sides[0] + sides[1] <= Math.max(...sides)){
        return 2;
    }else{
        return 1
    }
    

}