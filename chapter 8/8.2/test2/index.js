// Сработает если никто не изменил User.prototype из за чего у него удалился constructor

function User(name) {
    this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');

alert(user2.name); // Pete