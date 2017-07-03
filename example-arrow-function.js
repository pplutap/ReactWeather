 var names = ['Pawel', 'ann', 'else'];
//
// names.forEach(function (name) {
//     console.log('foreach', name);
// });
//
// names.forEach((name) => console.log('arrow', name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Pawel'));

// var person = {
//     name: 'Pawel',
//     greet: function () {
//         names.forEach((name) => {
//             console.log(this.name + ' say hi to ' + name);
//         })
//     }
// };
//
// person.greet();

 function add(a, b) {
     return a+b;
 }

 var add1 = function (a, b) {
     return a + b;
 };

 var add2 = (a, b) => a+b;

 console.log(add(1,3));
 console.log(add(0,8));

 console.log(add1(1,3));
 console.log(add1(0,8));

 console.log(add2(1,3));
 console.log(add2(0,8));