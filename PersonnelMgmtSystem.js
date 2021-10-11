class Person{
    
    static personCounter = 0;

    constructor (name, surname, age){
        this._idPerson = ++Person.personCounter;
        this._name = name;
        this._surname = surname;
        this._age = age;
    }

    get idPerson(){
        return this._idPerson;
    }

    get name(){
        return this._name;
    }

    set name (name){
        this._name = name;
    }

    get surname (){
        return this._surname;
    }

    set surname (surname){
        this._surname = surname;
    }

    get age (){
        return this._age;
    }

    set age (age){
        this._age = age;
    }

    toString(){
        return `
        ${this._idPerson} 
        ${this._name} 
        ${this._surname} 
        ${this._age}`;   
    }
}


class Employee extends Person{

    static employeeCounter = 0;

    constructor (name, surname, age, income){
        super(name, surname, age);
        this._idEmployee = ++Employee.employeeCounter;
        this._income = income;
    }

    get idEmployee (){
        return this._idEmployee;
    }

    get income (){
        return this._income;
    }

    set income (income){
        this._income = income;
    }

    toString (){
        return `
        ${super.toString()}
        ${this._idEmployee}
        ${this._income}
        `
    }
}


class Customer extends Person{
    
    static customerCounter = 0;

    constructor (name, surname, age, registerDate){
        super(name, surname, age);
        this._idCustomer = ++Customer.customerCounter;
        this._registerDate = registerDate;
    }

    get idCustomer (){
        return this._idCustomer;
    }

    get registerDate (){
        return this._registerDate;
    }

    set registerDate (registerDate){
        this._registerDate = registerDate;
    }

    toString (){
        return `
        ${super.toString ()}
        ${this._idCustomer}
        ${this._registerDate}
        `
    }
}


let person1 = new Person("Andrés", "Fonseca", 20);
console.log(person1.toString());

let person2 = new Person("Diego", "Rodríguez", 20);
console.log(person2.toString());

let employee1 = new Employee("Luisa", "Vanegas", 19, 122000);
console.log(employee1.toString());

let employee2 = new Employee("Fernanda", "Lezcano", 19, 121000);
console.log(employee2.toString());

let customer1 = new Customer("Sindy", "Vanegas", 30, new Date ());
console.log(customer1.toString());

let customer2= new Customer("Julieth", "Lezcano", 30, new Date());
console.log(customer2.toString());