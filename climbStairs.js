/*
    You are climbing a staircase. It takes n steps to reach the top.
    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

    Input: n = 3
    Output: 3
    Explanation: There are three ways to climb to the top.
    1. 1 step + 1 step + 1 step
    2. 1 step + 2 steps
    3. 2 steps + 1 step
*/

// 1  Fibonacci
/*
    The key intuition to solve the problem is that given a number of stairs n,
    if we know the number ways to get to the points [n-1] and [n-2] respectively,
    denoted as n1 and n2 , then the total ways to get to the point [n] is n1 + n2. 
    Because from the [n-1] point, we can take one single step to reach [n]. 
    And from the [n-2] point, we could take two steps to get there.
*/

let n = 5;

var climbStairs = function(n) {
    if (n <= 2) {
        return n;
    }

    return climbStairs(n - 2) + climbStairs(n - 1);
};

console.log(climbStairs(n));  // we will get the value as 8

/*
    we can see the repitiveness in the code 
    let's say  n is 5.
    climbStairs(n-1) + climbStairs(n-2) means 4 + 2
    before calculating climbStairs(n-2), it will complete all calculations of climbStairs(n-1).

    climbStairs(5-1) means climbStairs(4)
    again it will called like climbStairs(n-1) + climbStairs(n-2) means 3 + 2
    before calculating climbStairs(n-2), it will complete all calculations of climbStairs(n-1).

    climbStairs(4-1) means climbStairs(3)

    and it repeats,

    lets see the repitiveness.

    1st - for 5, we want 4,3
    2nd - for 4, we need 3,2
    3rd - for 3, we need 2,1 after this we return 2+1.then we will calculate for 2nd part 2, it returns 2. for 4, we have 2+1 + 2 = 5
    then we go for 1st again because we returned value for 4.now we have to do it for 3.

    for 3, we need 2,1,after this we will return AGAIN calculations from 2nd step repeats.
    we alredy calculated value for 3 once. we need to re-calculate the value of 3 now. it is the repitiveness in this approch.

    we can optimise it using DYNAMIC PROGRAMMING.
    we can do like we start saving the values in the map.
    when we have to calculate any value, we will first check if the value is present in the map or not, 
    if present we will return the value or we will calulate it and set it in the map.

*/

// 2. DYNAMIC PROGRAMMING

let climbStairs2 = function (n) {
    let map = new Map();
    return supportfunction(n, map)
};

let supportfunction = function(n, map) {
    if (n <= 2) {
        return n
    }
    if (map.has(n)) {
        return map.get(n)
    } else {
        map.set(n, supportfunction(n - 1, map) + supportfunction(n - 2, map))
    }
    return map.get(n);
    /*
        we should return at the end, otherwise we will get undefined because after completion we will be at the line number 79.
        we will be setting the value in the map after it's calculations.if we don't return, it means supportfunction don't return anything. So, we have to return the n value at the the end.
    */
}
console.log(climbStairs2(n)) // we will get the value as 8