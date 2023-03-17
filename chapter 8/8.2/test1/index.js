function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert(rabbit.eats); // true


function Rabbit2() { }
Rabbit2.prototype = {
    eats: true
};

let rabbit2 = new Rabbit2();

Rabbit2.prototype.eats = false;

alert(rabbit2.eats); // false


function Rabbit3() {}
Rabbit3.prototype = {
  eats: true
};

let rabbit3 = new Rabbit3();

delete rabbit3.eats;

alert( rabbit3.eats ); // true


function Rabbit4() {}
Rabbit4.prototype = {
  eats: true
};

let rabbit4 = new Rabbit4();

delete Rabbit4.prototype.eats;

alert( rabbit4.eats ); // undefined