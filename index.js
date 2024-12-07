//
// class Square {
//     constructor(_width) {
//         this._width = _width;
//         this.height = _width;
//         this.numberOfRequestsForArea = 0;
//     }
//
//     get area () {
//         this.numberOfRequestsForArea++;
//         return this.width * this.height;
//
//     }
//     set area (value) {
//         this.width = Math.sqrt(value);
//         this.height = this.width;
//     }
// }
//
// let square1 = new Square(4);
// square1.area = 25;
// // console.log(square1.width);
// // console.log(square1.height);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
//
// console.log(square1.numberOfRequestsForArea);
//

//Practice_1
// class BankAccount {
//     constructor(client) {
//         this._balance = 0; //текущий баланс
//         this._numberOfDeposits = 0; //количество депозитов
//         this._numberOfWithdrawals = 0; //количество снятых средств
//     }
//
//     get balance() {
//         return this._balance; //возвращает текущий баланс счета
//     }
//
//     set balance(value) {
//
//         if (value <= 0) {
//             return 'Insufficient funds';
//         } else {
//             return this._balance = value;
//         }
//     }
//
//     get numberOfDeposits() {
//         return this._numberOfDeposits;
//     }
//
//     get numberOfWithdrawals() {
//         return this._numberOfWithdrawals;
//     }
//
//     deposit(amount) {
//         if (amount > 0) {
//             this._balance += amount;
//             this._numberOfDeposits++;
//         } else {
//             console.log('The deposit amount must be positive');
//         }
//     }
//
//     withdraw(amount) {
//         if (amount > this._balance) {
//             this._balance -= amount;
//             this._numberOfWithdrawals++;
//         } else {
//             console.log('insufficient funds in the account');
//         }
//     }
// }
//
// let account = new BankAccount();
//
// account.deposit(500);
// console.log(account.balance);
// console.log(account.numberOfDeposits);
//
// account.withdraw(200);
// console.log(account.balance);
// console.log(account.numberOfWithdrawals);
//
// account.withdraw(400);
// console.log(account.balance);
// account.balance = -100;

//Practice_2
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     get name() {
//         return this._name;
//     }
//     set name(value) {
//         this._name = value;
//     }
//     get age() {
//         return this._age;
//     }
//
//     set age(value) {
//         if(value >= 0) {
//             this._age = value;
//         } else {
//             console.log("Age can't be less than 0");
//         }
//     }
//
//     get town() {
//         return this._town;
//     }
//
//     set town(value) {
//         this._town = value;
//     }
// }
//
// let person1 = new Person('Jan', 25);
//     person1.town = 'Kyiv';
//
//
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.town);
//
// //change
// person1.name = 'Amelia';
// person1.age = 5;
// person1.town = 'Helsinki';
// person1.age = -1;
//
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.town);

//Practice_3

// class Book {
//     constructor (title, author, year, checkedOut) {
//         this._title = title;
//         this._author = author;
//         this._year = year;
//         this._checkedOut = false;
//     }
//     get title () {
//         return this._title;
//     }
//
//     get author () {
//         return this._author;
//     }
//
//     get year () {
//         return this._year;
//     }
//
//     get checkedOut () {
//         return this._checkedOut;
//     }
//
//
//     set title(value) {
//         if (typeof value !== 'string') {
//             console.log('error');
//         } else {
//            this._title = value;
//         }
//     }
//
//     set author(value) {
//         if(typeof value !== 'string') {
//             console.log('error');
//         } else {
//             this._author = value;
//         }
//     }
//
//     set year(value) {
//         if (value < 1450 || value > new Date().getFullYear() ) {
//             console.log('Invalid year')
//         } if (typeof value !== 'number') {
//             console.log('Invalid data')
//         } else {
//            console.log(value);
//         }
//     }
//
//     checkOut() {
//         if (this._checkedOut) {
//             console.log(`The book "${this._title}" is already checked out.`);
//         } else {
//             this._checkedOut = true;
//             console.log(`The book "${this._title}" has been checked out.`);
//         }
//     }
//
//     returnBook(){
//         if (!this._checkedOut) {
//             console.log(`The book "${this._title}" is not currently checked out.`);
//         } else {
//             this._checkedOut = false;
//             console.log(`The book "${this._title}" has been returned.`);
//         }
//     }
//
// }
//
// let book1 = new Book('"JavaScript Basics", "John Doe", 2022');
//
// console.log(book1.title); // "JavaScript Basics"
// console.log(book1.checkedOut); // false (книга не выдана)
//
// // Попробуем выдать книгу
// book1.checkOut(); // "The book "JavaScript Basics" has been checked out."
// console.log(book1.checkedOut); // true (теперь книга выдана)
//
// // Попробуем вернуть книгу
// book1.returnBook(); // "The book "JavaScript Basics" has been returned."
// console.log(book1.checkedOut); // false (книга возвращена)
//
// // Попробуем вернуть книгу, которая уже возвращена
// book1.returnBook(); // "The book "JavaScript Basics" is not currently checked out."



//
//Static Methods
// class Square {
//     constructor(_width) {
//         this.width = _width;
//         this.height = _width;
//     }
//     static equals (a, b) {
//         return a.width * a.height === b.width * b.height;
//     }
//
//     static isValidDimensions (width, height) {
//         return width === height;
//     }
// }
//
// let square1 = new Square(8);
// let square2 = new Square(9);
//
// console.log(Square.equals(square1, square2));
// console.log(Square.isValidDimensions(6, 6));

// class Temperature {
//
//     static celsiusToFahrenheit(temp) {
//         return temp * 9 / 5 + 32;
//     }
// }
//
// let tempInCelsius = 20;
// let tempInFahrenheit = Temperature.celsiusToFahrenheit(tempInCelsius);
//
// console.log(`Температура ${tempInCelsius}°C = ${tempInFahrenheit}°F`);

// class MathUtils {
//     static isDevisible(a, b) {
//          if (a % b === 0) {
//              return true;
//         } else {
//              return false;
//         }
//     }
// }
//
//
// let result = MathUtils.isDevisible(25, 4);
// console.log(result);
//
// result = MathUtils.isDevisible(20, 5);
// console.log(result);

// class Triangle {
//     constructor(sideA, sideB, sideC) {
//         this.sideA = sideA;
//         this.sideB = sideB;
//         this.sideC = sideC;
//     }
//
//     static isValidTriangle(sideA, sideB, sideC) {
//         if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     getPerimeter() {
//         return this.sideA + this.sideB + this.sideC;
//     }
// }
//
// let triangle = new Triangle(3, 4, 5);
//
// console.log(Triangle.isValidTriangle(triangle));
// console.log(triangle.getPerimeter());

// class RightTingle {
//     constructor(sideA, sideB, sideC) {
//         this._sideA = sideA;
//         this._sideB = sideB;
//         this._sideC = sideC;
//     }
//     isRightTingle() {
//         let sides = [this._sideA, this._sideB, this._sideC];
//         sides.sort((a, b) => a - b);
//
//         return sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2;
//     }
//
//     static checkRightTriangle(a, b, c) {
//         let triangle = new RightTingle(a, b, c);
//         return triangle.isRightTingle();
//     }
// }
//
// let result = RightTingle.checkRightTriangle(3, 4, 5)
// console.log(result);

// class Person {
//     constructor(_name, _age) {
//         this.name = _name;
//         this.age = _age;
//     }
//
//     describe () {
//         console.log(`I'm ${this.name} and I'm ${this.age} years old`);
//     }
// }
// class Programmer extends Person {
//     constructor(_name, _age, _yearsOfExperience) {
//         super(_name, _age);
//
//         this.yearsOfExperience = _yearsOfExperience;
//     }
//     code() {
//         console.log(`${this.name} is coding`);
//     }
// }

// let person1 = new Person('Jeff', 45);
// let programmer1 = new Programmer('Tom', 56, 12);
//
// programmer1.code();
// programmer1.describe();

// }

class Pizza {
    crust = "original"
    #sauce = "traditional"
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    hereYouGo() {
        console.log(`Here your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`);
    };
}
const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.pizza);