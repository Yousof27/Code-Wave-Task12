/*

Task 1
-------
Create a function that accepts only 2 parameters and throw
exception if number of parameters either less than or exceeds 2 parameters.

*/

// function only2parameters(par1, par2) {
//     if (arguments.length !== 2) {
//         throw new Error("Error: Only Accept 2 Parametars ❌ :(");
//     }
//     console.log(`Right Calling ✔️ :)`);
// }

// try {
//     // only2parameters(9);
//     // only2parameters(9, 'y');
//     // only2parameters(9, 4, 6);
// } catch (error) {
//     console.log(error)
// }










//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////










/*

Task 2
-------
Write your own function that can add n values ensure that all passing
parameters are numerical values only.

*/

// function addNums(...nums) {
//     let wrong = nums.find(n => typeof n !== 'number');
//     if (wrong !== undefined) {
//         throw new Error(`Error: '${wrong}' Is Not A Number :(`);
//     }
//     return nums.reduce((sum, num) => sum + num, 0);
// }

// try {
//     let sum = addNums(1, 2, 3, 4, 't');
//     console.log(sum);
// } catch (error) {
//     console.log(error)
// }










//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////










/*

Task 3
-------
Write a function that takes any number of parameters and returns
them reversed using array’s reverse function.

*/

// function reverseInputs(...values) {
//     return values.reverse()
// }

// console.log(reverseInputs(0, 1, 2, 3, 4, 5))









//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////










/*

Task 4
-------
make function isPrime() to check if the number is prime or not.

*/

function isPrime(number) {
    let prime = true;
    for (let i = 2; i < (number / 2) + 1; i++) {
        if (number % i === 0) {
            prime = false;
            break;
        }
    }
    (prime && number > 1) ? console.log('✔️ Prime') : console.log('❌ Not Prime');
}

isPrime(114)
