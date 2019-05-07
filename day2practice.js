//* make a JS file and run it with nodemon to complete the following tasks, log each output to the console

// 1. write a javascript function that takes ina  number and returns its double

function doubler(num) {
    return num * 2;
}
const answer1 = doubler(4);
console.log(answer1);

// 2. write a javascription function that takes ina  string and capitalizes every letter of the string

function capitalize(string) {
    return string.toUpperCase();
}
const answer2 = capitalize("hi, my name is drew and i'm not yelling you're yelling");
console.log(answer2);


// 3. write a javascript function that takes in a number and returns true if the number is even, false if its odd.

function isEven(num) {
    return num % 2 == 0;
}
const answer3 = isEven(2); 
console.log(answer3);

// 4. write a javascript function that takes in a number and returns that number doubled if it is even, tripled if odd.


