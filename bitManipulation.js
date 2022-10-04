// 1
/*
    Given a number. Check if ith bit is set or not. 
    set means 1 and non set means 0.
    So it is saying that check if ith bit is 1 or not.
*/
let num = 2
let ith = 2
/*
    2 in bits is 010
    since second bit is 1, we should return true;
    we have '&' operator in bitmanipulation which can help us in this senario.
    it will return 1 only if two bit are 1;
    So we can take advantage of this property here.
    
    given number = 010
    so we should create a number with 1 in the ith index and bitwise & both given and created number.
    how can we get the number as 1 in the required bit?
    we can take advantage of another bitwise operator called 'leftshift'operator
    1 << 1 means,
    actully 1 is 0001
    after 1 bit left shifting it is 0010.
    so we can use this property.

    lets see for number 6. if 2nd bit is 1 or not?
     given number: 110
     created num : 010
     we can get true now.

*/
let isSet = function (num, ith) {
    if ((num & (1 << ith - 1)) > 0) {
        return true
    } else {
        return false;
    }
}(num, ith);
console.log(isSet)

// 2
/*
    Given an array, find the XOR of all the numbers where ith bit is set.
*/

let nums = [2, 10, 4, 3, 1];
let ithbit = 1;
/*
    we should get value as 2;
    2 -> 010
    10 -> 1010
    4 -> 100
    3 -> 011
    1 -> 001

    so the numbers that are having bit as 1 in the ist bit are 3 and 1.
    3 ^ 1 = 011
            001
            = 010 => 2
*/
var xorNumbers = function (nums, ith) {
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] & (1 << ith - 1)) > 0) {
            num ^= nums[i];
        }
    }
    return num;
}(nums, ithbit)
console.log(xorNumbers); // we wii be returning value 2.

// 3.  Most commonly asked interview question
/*
    Given an array, all the numbers appear even number of times except one number.
    find that number which occur odd number of times.
*/

/*
    we can make use of XOR operator here. By doing this we can get the optimal solution than befor approch
    0 ^ 0 = 0
    0 ^ 1 = 1
    1 ^ 1 = 0
    1 ^ 0 = 1

    anything XOR with 0 gives itself
    anythinf XOR with itself gives 0

    means what i wann say is we have an array [2,1,3,2,1,3,1,3,1,4,4]
    2 ^ 2 ^ 1 ^ 1 ^ 1 ^ 1 ^ 4 ^ 4 ^ 3 ^ 3 ^ 3;
    means,
    2 ^ 2 = 0,
    0 ^ 1 = 1,
    1 ^ 1 = 0,
    0 ^ 1 = 1,
    1 ^ 1 = 0,
    0 ^ 4 = 4,
    4 ^ 4 = 0,
    0 ^ 3 = 3,
    3 ^ 3 = 0,
    0 ^ 3 = 3

    So we have 3 as occuring odd number of times.
    
*/
let array = [2, 1, 3, 2, 1, 3, 1, 3, 1, 4, 4];
var oddOccurence = function (array) {
    let result = 0
    for (let i of array) {
        result ^= i;      //this means result = result ^ i
    }
    return result
}(array);
console.log(oddOccurence) // we get 3 here

// 4. this is supposed to be little difficult.

/*
    Given an array, all the numbers appear even number of times except two numbers.
    find that two numbers which occur odd number of times.
*/

let arr = [4, 1, 2, 3, 2, 1, 5, 4];
/*
    if we XOR all the numbers, we can get the the result after all cancelations will be 3 ^ 5.
    3 ^ 5 = 011
            101
        =   110 => 6

        so 3 ^ 5 = 6.
        So XOR of all numbers gives 6.

        how can we make a relation in this so that we can get the values 3 and 5 from this ?
       ->  lets observe the bits of 6
       ->  110. here second bit is 1. means the numbers that we did XOR should have the different bit values in the second bit position.
         thats why we have bit as 1 in the 6.
       ->  lets partition the array with the second bit as 1 and 0. Now we can get two parts of the array having different bit values in the second bit position
        
        4 - 100
        1 - 001
        2 - 010
        3 - 011
        2 - 010
        1 - 001
        5 - 101
        4 - 100

        1st part -> 4,1,1,5,4 are having bit value as 0 in 2nd position
        2nd part -> 2,3,2 are having bit value as 1 in 2nd position

        we can XOR the parts individully and get those two numbers.
        if we XOR all values of 1st part, we get 5
        if we XOR all values of 2nd part, we get 3.

*/

var twoNumbers = function (arr) {
    let xorOfAll = 0;
    for (let i of arr) {
        xorOfAll ^= i;
    }

    let pos = 0;
    for (let i = 0; i < 32; i++) {
        if ((xorOfAll & (1 << i)) > 0) {
            pos = i;
            break;
        }
    }

    let num1 = 0;
    let num2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] & (1 << pos)) > 0) {
            num1 ^= arr[i]
        } else {
            num2 ^= arr[i]
        }
    }
    console.log(num1, num2)
}(arr); // we will get 3, 5 here.
