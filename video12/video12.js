console.log('Hello world from HTML')

let arrtop4 = ['ManCity', 'Liverpool', 'MU', 'chelsea'];

for(let i = 0; i < arrtop4.length; i++) {
    console.log('Top : ', i + 1, arrtop4[i])
}

 let i = 0; // var i = 0;
// while(i < arrtop4.length){
//     console.log('Top : ', i + 1, arrtop4[i]);
//     i++;
// }
// do {
//     console.log('Top : ', i + 1, arrtop4[i]);
//         i++;
// } while (i < arrtop4.length)
let flag = false;

while(!flag) {
    console.log('check value i : ', i)
    i++;
    if (i === 10) flag = true;

}