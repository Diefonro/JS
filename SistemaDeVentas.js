class Product{

    static productCounter = 0;

    constructor (name, price){
        this._idProduct = ++Product.productCounter;
        this._name = name;
        this._price = price;
    }

    get idProduct (){
        return this._idProduct;
    }

    get name (){
        return this._name;
    }

    set name (name){
        this._name = name;
    }

    get price (){
        return this._price;
    }

    set price (price){
        this._price = price;
    }

    toString(){
        return `
        idProduct: ${this._idProduct}
        Name: ${this._name}
        Price: $${this._price}
        `
    }
}

let product1 = new Product ("Pants", 350)
let product2 =  new Product ("T-Shirt", 200)

console.log(product1.toString());
console.log(product2.toString());


class Order{

    static orderCounter

    constructor (product, counterProductsAdded){
        this._idOrder = ++Order.orderCounter;
        this._product = product;
        this._counterProductsAdded;
    }
}