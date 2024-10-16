function solution(array) {
   const frequency = array.reduce((acc,cur) =>{
       acc[cur] = (acc[cur] || 0) +1
       return acc
   },{})
   const sortedFreq = Object.entries(frequency).sort((a,b) => b[1] - a[1])
   if(sortedFreq.length > 1 && sortedFreq[0][1] === sortedFreq[1][1]){
       return -1
   }else{
       return parseInt (sortedFreq[0][0])
   }
}