function add(first = 0, second = 0){
    const sum = first + second;
    console.log(sum);
}

add(10, 10);


function fullName(firstName, lastName = 'islam'){
    const name = firstName + ' ' + lastName;
    return name;
}

const userName = fullName('sabbir');
console.log(userName);


function sumAll(first = 0, second = 0, third = 0){
    const sum = first + second + third;
    return sum;

}

const sumAllNmuber = sumAll(10, 20, 50);
console.log(sumAllNmuber);