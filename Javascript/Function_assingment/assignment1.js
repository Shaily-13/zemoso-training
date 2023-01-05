//QUESTION-1 PASSING A FUNCTION AS PARAMETER OF ANOTHER FUNCTION
let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let divide = (a,b) => a/b;
let calculate = function (func) {
    let x = 2;
    let y = 3;
    return func(x, y);
}
console.log(calculate(add));       
console.log(calculate(subtract)); 
console.log(calculate(multiply));  
console.log(calculate(divide));  
