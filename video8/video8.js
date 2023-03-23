console.log('Hello world from HTML');
let a = {};
let b = 'hai xom';
console.log('type of a: ', typeof a, ' type of b: ', typeof b);

//key : value
let obj = {
    name: 'Hai',
    address: 'Ha Noi',
    // a: function () {
    //     console.log('Hello world inside function')
    //     return '';
    // }
};
let c = 'name';
obj[c] = 'harry';

console.log('what is your name? ', `my name's : `, obj['name']);
console.log('where are you from? ', `i'm from : `, obj.address);
// console.log('Call function : ', obj.a());
