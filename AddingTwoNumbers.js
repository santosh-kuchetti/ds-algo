// /*
//     Two numbers in the form of strings are passed to a function.
//     Which should add the numbers and return the result in the form of string.
// */


//     var a = '1';
//     var b = '2';

//     var required = function (a, b) {
//         // let num1 = parseInt(a);
//         // let num2 = parseInt(b);

//         // let sum = num1 + num2;
//         // return sum.toString();

//         return (parseInt(a) + parseInt(b)).toString()

//         // we can also do this like
//         // return (Number(a) + Number(b)).toString()

//     }(a, b);

//     console.log(typeof (required), required);



// // even though our approch is right there are somethings to know in this sum.

// /*
//     what if the numbers we have add are '999999999999999999999999999999999999999999999999999' and '1'

//     the result will be 1e+51 but it is in a string format.

//      but what even 1e+51,
     
//      1 indicates 1*
//      e here indicates power of 10.
//      + indicates the next value is the power

//      finally its (1* 10^51)


// */

// /*
//     difference between parseInt and Number.

//     parseInt(32px) gives  32. parseInt will extract number from the string.
//     Number(32px) gives NaN.  Number will convert the string into number only if given string value is number.
// */

// /*
//     There is some thing in javascript need to aware of.
//     There is a limit in terms of number that javascript can show in number format.
//     Beyond that number it is difficult to show in number format but it shows the number in the form for example (1e+51).
    
//     The maximum safe number we can show up is (Number.MAX_SAFE_INTEGER)
// */

// console.log(typeof (Number.MAX_SAFE_INTEGER))

// /*
//     there is something called BigInt, which can give convert large Integers into number format.
//     return (BigInt('9999999999999999999999999999999') + BigInt(1)).toString(). this is enough to solve above issue
// */

// console.log(BigInt('9999999999999999999999999999999') + BigInt('1'))  // this will give 10000000000000000000000000000000n. where n at last represent it is a number.


const a = '123'
const b = '9'

const required = function required(a, b) {
    let alength = a.length;
    let blength = b.length;
    let string = '';
    let extra = 0;
    let maxLength = alength > blength ? alength : blength;
    for (let i = 1; i <= maxLength; i++){
        let n1 = +a.charAt(alength - i);        
        let n2 = +b.charAt(blength - i);
        let sum = n1 + n2 + extra;
        extra = sum / 10 | 0;
        sum = sum % 10;
        if (i === maxLength && extra) {
            string = extra*10 +  sum + string
        } else {
            string = sum  + string
        }

    }
    return string
    
}(a,b)

console.log(required, typeof (required))   // it will be 132 and it is a string

/*
    we are putting  + before because 
    + + 2 = 2 and 
    + + '' = 0

    when 234
           3

           then we need to add 3 with empty string and also next, we need to add 2 with empty string.
           So, if we add + before every element, it wil be easy for us, like this +2 + +'' this will be considered as 2 + 0

*/
