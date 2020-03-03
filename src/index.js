import test from './test.js';

window.onload=function() {
    test();
};


console.log(test);

const Name = ["Mike", "Jacky", "Andy", "Scars"];
Name.forEach((obj, idx)=> console.log(`${idx} => ${obj}`));