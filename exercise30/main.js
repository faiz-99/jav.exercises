// More on callbacks


function operator(a, b, callback) {
    return callback(a, b);
}

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

console.log(operator(4, 2, addition));      
console.log(operator(4, 2, subtraction));    
console.log(operator(3, 2, multiplication));
console.log(operator(12, 6, division));     

// output:
// 6
// 2
// 6
// 2


