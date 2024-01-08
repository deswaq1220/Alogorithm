function solution(num_list) {
    let even = num_list.filter(el => (el%2==0));
    let odd = num_list.filter(el => (el%2==1));
    return Number(even.join(''))+Number(odd.join(''));
}