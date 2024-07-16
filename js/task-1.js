let customer = {
  discount: 0,
  balance: 0,
  orders: [],

  getDiscount() {
      return this.discount;
  },

  setDiscount(newDiscount) {
      this.discount = newDiscount;
  },

  getBalance() {
      return this.balance;
  },

  getOrders() {
      return this.orders;
  },

  addOrder(amount, product) {
      this.orders.push({ amount, product });
      this.balance += amount;
  }
};


console.log(customer.getDiscount()); 

customer.setDiscount(0.15);
console.log(customer.getDiscount()); 

console.log(customer.getBalance());

customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); 
console.log(customer.getOrders());  