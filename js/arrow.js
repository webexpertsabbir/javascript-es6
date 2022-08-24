// function dicliaration
function add(first, second){
    const sum = first + second;
    return sum;
}

//function expretion
const add1 = function add1(first, second){
    const sum = first + second;
    return sum;
}

// function expretion with amonuymas function
const add2 = function (first, second){
    const sum = first + second;
    return sum;
}

function add3(first, second){
    return first + second;
}


const add4 = function(first, second){
    return first + second;
}

// arrow function
const add5 = (first, second) => first + second;

const total = add5(20, 30);
console.log(total);
