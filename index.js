/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    if(n<=1){
        return 1;
    }

    let current = previous = 1;
// we will start from 2 as we handled cases equal to 1 and less than one
    for(let i = 2; i<= n; i++){
        let temp = current;
        current = current + previous;
        previous = temp;
    }

    return current;
    
};
