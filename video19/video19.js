console.log('Hello world from HTML');

//function vs method => reuse

let obj = {
    name : 'Hai',
    address : 'Ha Noi',
    getName : function() {
        return this.name;
    }
}
console.log('>>> get Name obj : ',obj.getName());

//function : any where, alone
//method : in class or object