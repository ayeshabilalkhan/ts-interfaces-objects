// 3. Interfaces and Objects

// Interface defining properties of an object
interface Person {
    name: string;
    age: number;
    greet: () => void;
}

// Object with defined interface
let person1: Person = {
    name: "Sara",
    age: 20,
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    },
};
person1.greet();
