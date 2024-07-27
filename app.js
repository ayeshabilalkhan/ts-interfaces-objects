// 3. Interfaces and Objects
// Object with defined interface
var person1 = {
    name: "Alice",
    age: 30,
    greet: function () {
        console.log("Hello, my name is ".concat(this.name, "."));
    },
};
person1.greet();
