// object destructuring

const fish = {
    name : 'Elish',
    sthan : 'sumidro',
    projati : 'arthopoda'
}
const {name, sthan, projati} = fish;
console.log(name, sthan);

// array destructuring

const [frist, second] = [10, 20, 30, 40];
console.log(frist, second);

//function destructuring

function getName(){
    return ['Alim ', 'Halim'];
}

const [chaca, dada] = getName();
console.log(dada, chaca);