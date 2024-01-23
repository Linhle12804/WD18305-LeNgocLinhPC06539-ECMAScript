//Dựa vào code javascript phía dưới, sử dụng getter và setter để hoàn thành code 

// var person ={
//     firstname: "Albert",
//     lastname: "Einstein",

//     function(_lastname){
//         this.lastname = _lastname;
//     },

//     function (_firstname){
//         this.firstname =_firstname;
//     },
// };
// person.setLastName('Newton');
// person.setFirsName('Issac');
// console.log(person.getFullName());

var person = {
    _firstname: "Albert",
    _lastname: "Einstein",

    set setLastName(value) {
        this._lastname = value;
    },

    set setFirstName(value) {
        this._firstname = value;
    },

    get getFullName() {
        return this._firstname + ' ' + this._lastname;
    },
};

person.setLastName = 'Newton';
person.setFirstName = 'Issac';
console.log(person.getFullName);
