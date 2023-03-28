console.log('Hello world from HTML')

let arrtop4 = ['Live', 'Chelsea', 'MU', 'ManCity']

let i = 0;
while(i < arrtop4.length) {

    // if else condition
    // if(arrtop4[i].length === 2) {
    //     console.log('Top Club : ', i + 1, arrtop4[i]);
    // } else if (arrtop4[i].length === 4){
    //     console.log('Top Club : ', i + 1, arrtop4[i]);
    // }else{

    // }
    if(arrtop4[i] === 'Chelsea') {
        console.log('Found it : ', arrtop4[i])
        break;
    }
    console.log('>>> check i : ', i)
    i++;
}