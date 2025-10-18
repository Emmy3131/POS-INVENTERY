import * as makeSaleView from "../view/makeSaleView.js";

export default class MakeSale {
  constructor (){
    this.cart = [];
  }
  addToCart(name, price, quantity, productImage, productId){
    const id = Date.now(); // Unique ID for the cart item
    this.readCart()
    const existingItem = this.cart.find(i => i.productId === productId);;
    if(existingItem){
      existingItem.quantity += quantity;
    } else {
      const item = {name, price, quantity, productImage, id, productId, subTotal: price * quantity};
      this.cart.push(item);
    }
    this.persistCart()
    this.updateSummary()

    return this.cart.find(i => i.productId === productId);
    
  }
  updateSummary(){
    const { subTotal, tax, discount, orderTotal } = this.calculateTotals();
    makeSaleView.orderSummaryTotals(subTotal, tax, discount, orderTotal);
  }

  getCart(){
    return this.cart;
  }
  clearCart(){
    this.readCart()
    this.cart = []
    this.persistCart()
  }
  updateCartQuantity(id, newQuantity){
    this.readCart()
    const item = this.cart.find(item => item.id === id)
    if(item){
      item.quantity = newQuantity
      item.subTotal = item.price * newQuantity
      this.persistCart()
    }

    makeSaleView.updateCartQuantity(id, newQuantity)
    this.updateSummary()
  }
  calculateTotals(){
    this.readCart()
    const subTotal = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subTotal * 0.07;
    const discount = subTotal * 0.05;
    const orderTotal = subTotal + tax - discount;
    return { subTotal, tax, discount, orderTotal };

  }
  deleteCart(id){
    this.readCart()
    const index = this.cart.findIndex(item => item.id === id)
    if(index !== -1){
      this.cart.splice(index, 1)
      this.persistCart()
    }
  }

  persistCart(){
    localStorage.setItem("cart", JSON.stringify(this.cart))
  }

  readCart(){
    const cart = JSON.parse(localStorage.getItem("cart")) 
    if(cart){
      this.cart = cart
    }
  }
}