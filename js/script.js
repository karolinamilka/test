"use strict";


let number = 5;
number = 10;
console.log(number);




const obj = {
    name: 'John',
    age: 35,
    isMarried: false
};

console.log(obj.name);

let arr = ['zero', 'first', 2, {},
    []
];
console.log(arr[1]);

alert('Helo');

const result = confirm('Do you agree?');


const answer = prompt('Вам есть 18?', '');
console.log(answer);

const answers = [];

answers[0] = prompt('Name', '');
answers[1] = prompt('Age', '');
answers[2] = prompt('City', '');
console.log(typeof(answers));
