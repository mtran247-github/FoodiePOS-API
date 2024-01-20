// burrito entity
class Burrito {
    constructor(name, size, price) {
        this.name = name;
        this.size = size;
        this.price = price;
    }
}

module.exports = Burrito;


// order-item entity
class OrderItem {
    constructor(burrito, size, quantity) {
        this.burrito = burrito;
        this.quantity = quantity;
    }
}

// order entity
class Order {
    constructor() {
        this.orderId = 0;
        this.totalPrice = 0
        this.items = [];
    }
}

module.exports = { Burrito, Order, OrderItem };
