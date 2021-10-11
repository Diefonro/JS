class inputDevice{

    constructor (entryType, brand){
        this._entryType = entryType;
        this._brand = brand;
    }

    get entryType (){
        return this._entryType
    }

    set entryType (entryType){
        this._entryType = entryType;
    }

    get brand (){
        return this._brand;
    }

    set brand (brand) {
        this._brand = brand;
    }
}

class Mouse extends inputDevice{

    static mouseCounter = 0;

    constructor (entryType, brand){
        super(entryType, brand);
        this._idMouse = ++Mouse.mouseCounter;
    }

    get idMouse (){
        return this._idMouse;
    }

    toString(){
        return `
        Mouse: ${this._idMouse}, entryType: ${this._entryType}, brand: ${this._brand}`
    }
}

let mouse1 = new Mouse ("USB", "Razer");
let mouse2 = new Mouse ("USB-C", "Pavilion")
let mouse3 = new Mouse ("Lightning", "Apple")
console.log(mouse1.toString());
console.log(mouse3.toString());
console.log(mouse2.toString());


class Keyboard extends inputDevice{

    static keyboardCounter = 0;

    constructor(entryType, brand){
        super(entryType, brand);
        this._idKeyboard = ++Keyboard.keyboardCounter;
    }

    get idKeyboard (){
        return this._idKeyboard;
    }
    
    toString(){
        return `
        Keyboard: ${this._idKeyboard}, entryType: ${this._entryType}, brand: ${this._brand}`
    }
}

let keyboard1 = new Keyboard ("Bluetooth", "Dell");
let keyboard2 = new Keyboard ("Micro-USB", "Acer");
let keyboard3 = new Keyboard ("Air", "Apple");

console.log(keyboard1.toString());
console.log(keyboard3.toString());
console.log(keyboard2.toString());



class Screen{

    static screenCounter = 0;

    constructor(brand, size){
        this._idScreen = ++Screen.screenCounter;
        this._size = size;
        this._brand = brand;
    }

    get idScreen (){
        return this._idScreen;
    }

    get brand (){
        return this._brand;
    }

    set brand (brand){
        this._brand = brand;
    }

    get size (){
        return this._size;
    }

    set size (size){
        this._size = size;
    }

    toString(){
        return `
        Screen: ${this._idScreen} ${this._size} ${this._brand}`
    }

}

let screen1 = new Screen ("Pavilion", 16)
let screen2 = new Screen ("AOC", 27)

console.log(screen1.toString());
console.log(screen2.toString());

class Computer{

    static computerCounter = 0;

    constructor(name, screen, mouse, keyboard){
        this._idComputer = ++Computer.computerCounter;
        this._name = name;
        this._screen = screen;
        this._mouse = mouse;
        this._keyboard = keyboard;
    }

    get idComputer (){
        return this._idComputer;
    }

    get name (){
        return this._name;
    }

    set name (name){
        this._name = name;
    }

    get screen (){
        return this._screen;
    }

    set screen (screen){
        this._screen = screen;
    }

    get mouse (){
        return this._mouse;
    }

    set mouse (mouse){
        this._mouse = mouse;
    }

    get keyboard(){
        return this._keyboard;
    }

    set keyboard(keyboard){
        this._keyboard = keyboard
    }

    toString(){
        return`
        Computer :${this._idComputer}
        Name :${this._name}
        ${this._screen}
        ${this._keyboard}
        ${this._mouse}`
    }
}

let computer1 = new Computer ("Asus TUF", screen1, keyboard3, mouse2);
let computer2 = new Computer ("Acer Series 5", screen2, keyboard1, mouse1);
let computer3 = new Computer ("MacBook 3", screen1, keyboard2, mouse3);

console.log(computer3.toString());
console.log(computer1.toString());
console.log(computer2.toString());

class Order{

    static orderCounter = 0;

    constructor(){
        this._idOrder = ++Order.orderCounter;
        this._computers = []

    }

    addComputer(computer){
        this._computers.push(computer);
    }
    
    showOrder(){
        let orderComputers = " ";
        for (let computer of this._computers){
            orderComputers += `${computer}` + " ";
        }
        console.log( `Order: ${this._idOrder}, Computers: ${orderComputers},`)
    }

    
    get idOrder (){
        return this._idOrder;
    }
    
    get computers (){
        return this._computers;
        
    }
}


let order1 = new Order ();

order1.addComputer(computer1);
order1.addComputer(computer3);
order1.showOrder();




