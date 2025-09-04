//const a = 1;
//const b = 2;

//function pow (a, b)
//{
//console.log(a ** b);
//};
//pow(2, 3);
/*function isOdd(a) {
    if (a % 2 == 1) {
        return true
    } else {
        return false
    }
};
console.log(isOdd(10));*/
// for (let i = 100; i >= 0; i--)
// {
//     console.log(i);
// }

// const str = "Hello world!";

// for(i = 0; i < str.length; i++)
// {
//     console.log(str[i]);
// }
const numbers = [2, 1, 10, 8]

// function sum(arr) {
//     let finalSum = 0;
//     for (i = 0; i < numbers.length; i++) {
//         finalSum += numbers[i];
//     }
//     return finalSum;
// };
// console.log(sum(numbers));

function uwu(arr) {
    let finalSum = 0;
    for (i = 0; i < numbers.length; i++) {
        finalSum += numbers[i];     
    }
    finalSum /= numbers.length;
    return finalSum;
};
console.log(uwu(numbers));