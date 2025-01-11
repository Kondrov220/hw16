//1
class Account {
    constructor({login, email}){ 
    this.login = login;
    this.email = email;
}
getInfo() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
}
}
console.log(Account.prototype.getInfo); // function

const mango = new Account({
 login: 'Mangozedog',
 email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
 login: 'Poly',
 email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
//2
class User {
    constructor({name, age, followers}){
        this.name = name;
        this.age = age;
        this.followers = followers;
    }
    getInfo() {
        console.log(` User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
}
const mango1 = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
   });
   
   mango1.getInfo(); // User Mango is 2 years old and has 20 followers
   
   const poly1 = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
   });
   
   poly1.getInfo(); // User Poly is 3 years old and has 17 followers
//3
class Storage {
    constructor(items){
        this.items = items;
    }
   
    getItems() {
            return(this.items);
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
         const index = this.items.indexOf(item);
         this.items.splice(index, 1)
    }
}
const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);
   
   const items = storage.getItems();
   console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
   
   storage.addItem('Дроїд');
   console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
   
   storage.removeItem('Пролонгер');
   console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
//4
class StringBuilder {
    constructor(str){
        this._value = str;
    }

    get value(){
        return(this._value);
    }

    append(str) {
        this._value = this._value.padEnd(this._value.length + 1, str);
    }
    prepend(str) {
        this._value = this._value.padStart(this._value.length + 1, str);
    }
    pad(str) {
        this._value = this._value.padStart(this._value.length + 1, str);
        this._value = this._value.padEnd(this._value.length + 1, str);
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
//5
class Car {
    #price;

    static getSpecs(car) { 
        console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
    }
    /*
     * Додай статичний метод `getSpecs(car)`,
     * який приймає об'єкт-машину як параметр і виводить
     * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
     */
   
    /*
     * Конструктор отримує об'єкт налаштувань.
     *
     * Додай властивості майбутнього екземпляра класу:
     * speed - поточна швидкість, початкова 0
     * price - ціна автомобіля
     * maxSpeed - максимальна швидкість
     * isOn - заведений автомобіль, значення true або false. Спочатку false
     * distance - загальний кілометраж, спочатку 0
     */
    constructor(car) {
        this.speed = 0 ;
        this.price = car.price ;
        this.maxSpeed = car.maxSpeed;
        this.isOn = false;
        this.distance = 0;
    }

    get price(){
        return(this.#price);
    }

    set price(car){
        this.#price = car;
    }
    /*
     * Додай геттер і сеттер для властивості price,
     * який буде працювати з властивістю ціни автомобіля.
     */
   
    /*
     * Додай код для того, щоб завести автомобіль
     * Записує у властивість isOn значення true
     */
    turnOn() {
        this.isOn = true;
    }
   
    /*
     * Додай код для того, щоб заглушити автомобіль
     * Записує у властивість isOn значення false,
     * і скидає поточну швидкість в 0
     */
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }
   
    /*
     * Додає до властивості speed отримане значення,
     * за умови, що результуюча швидкість
     * не більше, ніж значення властивості maxSpeed
     */
    accelerate(value) {
        if(this.speed < this.maxSpeed) {
            this.speed += value;
        }
    }
   
    /*
     * Забирає від властивості speed отримане значення,
     * за умови, що результуюча швидкість не менше нуля
     */
    decelerate(value) {
        if(this.speed >= 0) {
            this.speed = this.speed - value;
        }
    }
   
    /*
     * Додає в поле distance кілометраж (hours * speed),
     * але тільки в тому випадку, якщо машина заведена!
     */
    drive(hours) {
        if(this.isOn === true){
            this.distance += (hours * this.speed);
        }
    }
   }
   
   const mustang = new Car({ maxSpeed: 200, price: 2000 });
   
   mustang.turnOn();
   mustang.accelerate(50);
   mustang.drive(2);
   
   Car.getSpecs(mustang);
   // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
   
   mustang.decelerate(20);
   mustang.drive(1);
   mustang.turnOff();
   
   Car.getSpecs(mustang);
   // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
   
   console.log(mustang.price); // 2000
   mustang.price = 4000;
   console.log(mustang.price); // 4000