
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
