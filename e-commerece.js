class Product {

    constructor(productId, productName, price) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
    }
    getDiscountedPrice(discount) {
        return this.price - (this.price * discount / 100);
    }
    static compareProducts(p1, p2) {

        if (p1.price > p2.price) {
            console.log(
                p1.productName + " is more expensive than " + p2.productName
            );
        }
        else if (p1.price < p2.price) {
            console.log(
                p2.productName + " is more expensive than " + p1.productName
            );
        }
        else {
            console.log("Prices are equal");
        }
    }
    display() {
        console.log("Product ID: " + this.productId);
        console.log("Product Name: " + this.productName);
        console.log("Price: " + this.price);
    }
}
class Electronics extends Product {

    constructor(productId, productName, price, warranty) {
        super(productId, productName, price);
        this.warranty = warranty;
    }
    display() {
        super.display();
        console.log("Warranty: " + this.warranty);
    }
}
let p1 = new Product(101, "Laptop Bag", 2000);
let p2 = new Product(102, "Office Chair", 5000);
console.log("Discounted Price: " + p1.getDiscountedPrice(10));
Product.compareProducts(p1, p2);
let e1 = new Electronics(103, "Laptop", 50000, "2 Years");
e1.display();