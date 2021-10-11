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
let product3 = new Product ("Gucci Belt", 3715)

console.log(product1.toString());
console.log(product2.toString());


class Order{

    static orderCounter = 0;

    static get MAX_PRODUCTS (){
        return 10;
    }


    constructor (){
        this._idOrder = ++Order.orderCounter;
        this._products = [];
        this._counterProductsAdded = 0;
    }

    get idOrder (){
    return this._idOrder;
    }

    addProducts (product){
    if (this._products.length < Order.MAX_PRODUCTS) {
        this._products.push(product);
    } 
    else{
        console.log("You can't add more products")
    }
}

    calculateTotal(){
        let saleTotal = 0;
        for(let product of this._products){
            saleTotal += product._price;
        }
        return saleTotal;
    }

    showOrder(){
        let orderProducts = "";
        for(let product of this._products){
            orderProducts += product.toString() + " ";
        }

        console.log (`Order: ${this._idOrder} Total: $${this.calculateTotal()}, Products: ${orderProducts}`)
    }


}


let order1 = new Order();
order1.addProducts(product1);
order1.addProducts(product2);

order1.showOrder();

let order2 = new Order();
order2.addProducts(product3);
order2.addProducts(product1);
order2.addProducts(product2);

order2.showOrder();