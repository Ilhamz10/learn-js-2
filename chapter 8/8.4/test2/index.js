function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function () {
    alert(this.name);
}

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();                        // Rabbit this == rabbit
Rabbit.prototype.sayHi();              // undefined this == Rabbit.prototype 
Object.getPrototypeOf(rabbit).sayHi(); // undefined this == Rabbit.prototype
rabbit.__proto__.sayHi();              // undefined this == Rabbit.prototype