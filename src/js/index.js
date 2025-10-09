import { elements } from "./view/base.js";
import { toggleProfileMenu } from "./view/base.js";
import { sidebarLinks } from "./view/base.js";
import * as userView from "./view/userView.js";
import User from "./Model/User.js";
import * as productView from "./view/productView";
import Product from "./Model/Product.js";
import * as makeSaleView from "./view/makeSaleView.js";
import MakeSale from "./Model/MakeSale.js";
import * as transaction from "./view/transactionView.js"

const state = {};



// Event listener for profile button
elements.profileBtn.addEventListener("click", toggleProfileMenu);
// Optional: click outside to close
document.addEventListener("click", (e) => {
  if (!elements.profileBtn.contains(e.target) && !elements.dropdownMenu.contains(e.target)) {
    elements.dropdownMenu.classList.add("hidden");
  }
});


elements.addUserBtn.addEventListener('click', () => {
  userView.showUserCard();
})

elements.userCardCancelBtn.addEventListener('click', () => {
  userView.hideUserCard();
})

document.addEventListener("click", sidebarLinks());

// Event listener for form submission
elements.newAddBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const input = userView.getUserInput();
  if (input.name && input.phone && input.password && input.email) {
    if(!state.user) state.user = new User()
    const user = state.user.addUser(input.name, input.phone, input.password, input.email, input.profileImage)
    userView.displayUser(user,);
    userView.clearUserInput();
    userView.hideUserCard();
  } else {
    alert("Please fill in all required fields.");
  }

});


document.querySelectorAll('.eachUser').forEach(table=>{
  table.addEventListener('click', e=>{
    const row = e.target.closest('tr');
    const user = new User()
    user.readUsers()
 
    //Handle user status update
    if(e.target.closest('.fa-user')) {
      const id = row.id;
      const updatedUser = user.updateUserStatus(parseInt(id))
      userView.updateUserStatusView(updatedUser)
     
    }

    //Handle delete user
    if (e.target.closest('.fa-user-times')) {
      if (confirm("Are you sure you want to delete this user?")) {

        const id =parseInt( row.id);
        console.log('ID:', typeof id);
        
        if(id){
          user.deleteUser(id)
          row.remove();
          alert("User deleted successfully")
        }else{
          alert("No user was found")
        }
      }
    }
  })
})

// product control section
elements.productAddBtn.addEventListener("click", ()=>{
  productView.newProductCard();
  
})
//
elements.productCardCancelBtn.addEventListener("click", ()=>{
  productView.hideProductCard();
  elements.newProductBtn.classList.remove('hidden');
  elements.editProductBtn.classList.add('hidden')
});

//Add product
elements.newProductBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  const input = productView.getProductInput();  
  if(input.name && input.price && input.discription && input.quantity && input.category){
    if(!state.product) state.product = new Product
    const product = state.product.addProduct(input.name, input.price, input.discription, input.quantity, input.category, input.productImage);
    productView.renderProduct(product, elements.productList, 'productPage');
    productView.renderProduct(product, elements.saletList, 'salesPage');
    productView.clearProductInput();
    productView.hideProductCard();
  
  }else{
    alert("Please fill in all required fields.");
  }
})

document.getElementById("ProductList").addEventListener("click", (e)=>{ 
  
  //handle delete product
  if(e.target.closest('.product-trash')){
    const id = e.target.parentNode.parentNode.parentNode.parentNode.id;
    console.log('delete product controller', id);
    
    state.product = new Product()
    if(!state.product) state.product = new Product() 
    if(confirm("Are you sure you want to delete this product?")){
      state.product.deleteProduct(id)
      productView.deleteProduct(id)
    }
  }

  //Handle product editing
  if(e.target.closest('.product-edit')){
    if(!state.product) state.product = new Product() 
    const id = e.target.parentNode.parentNode.parentNode.parentNode.id; 
    state.id = id;
    const product = state.product.getProduct(id);
    productView.editProduct(product)  
    productView.newProductCard();    
  }
});

//Edit Product
elements.editProductBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  const input = productView.getProductInput();  
  if(input.name && input.price && input.discription && input.quantity && input.category){
    if(!state.product) state.product = new Product
    state.product.editProduct(state.id, input)
    console.log('PRODUCTS FROM STATE:', state.product.products);
    productView.renderProducts(state.product.products)
    productView.clearProductInput();
    productView.hideProductCard();
  
  }else{
    alert("Please fill in all required fields.");
  }
})


// Make sale control
document.addEventListener('click', makeSaleView.initCartPage());

document.getElementById("saletList").addEventListener("click", (e)=>{ 
  //Handle add to cart
  if(e.target.closest('.add-to-cart')){
    const id = e.target.parentNode.parentNode.parentNode.parentNode.id;
    if(!state.MakeSale) state.MakeSale = new MakeSale()
    if(!state.product) state.product = new Product()

    state.product.readProduct()
    const product = state.product.getProduct(id);
    if(!product) return alert("Product not found")
      
    state.MakeSale.readCart()
    const alreadyInCart = state.MakeSale.cart.find(item => item.id === product.id); 

    if (alreadyInCart) {
      // Just increase quantity
      const updateQuantity = state.MakeSale.addToCart(product.name, product.price, 1, product.productImage, product.id);

      // Update cart UI
      makeSaleView.updateCartQuantity(updateQuantity.id, updateQuantity.quantity);

      const { subTotal, tax, discount, orderTotal } = state.MakeSale.calculateTotals();
      makeSaleView.orderSummaryTotals(subTotal, tax, discount, orderTotal);

      alert("Product quantity increased in cart");
      return;
    }  
    
    const item = state.MakeSale.addToCart(product.name, product.price, 1, product.productImage, product.id);
    makeSaleView.renderCartItem(item);

    const { subTotal, tax, discount, orderTotal } = state.MakeSale.calculateTotals();
    makeSaleView.orderSummaryTotals(subTotal, tax, discount, orderTotal);
    alert("Product added to cart successfully")
    
  }
})


document.getElementById("cartList").addEventListener("click", (e) => {
  if (e.target.closest('.cart-trash')) {
    e.stopPropagation()
    const id = e.target.parentNode.parentNode.parentNode.id.replace('cart-item-', '');
    console.log('delete cart item controller', id);
    
    if (!state.MakeSale) state.MakeSale = new MakeSale();
    state.MakeSale.deleteCart(parseInt(id));
    makeSaleView.deleteCartItem(id);
    const { subTotal, tax, discount, orderTotal } = state.MakeSale.calculateTotals();
    makeSaleView.orderSummaryTotals(subTotal, tax, discount, orderTotal);
    alert("Product removed from cart successfully");
    
  }

  if(e.target.closest('.fa-minus')){
   const id = Number(e.target.parentNode.parentNode.parentNode.parentNode.id.replace('cart-item-', ''));
    if(!state.MakeSale) state.MakeSale = new MakeSale();
    state.MakeSale.readCart()
    const item = state.MakeSale.cart.find(item => item.id === parseInt(id))
    const { subTotal, tax, discount, orderTotal } = state.MakeSale.calculateTotals();
    makeSaleView.orderSummaryTotals(subTotal, tax, discount, orderTotal);
    console.log("Item:",item);
    
   if(item){
    if(item.quantity > 1){
      const newQuantity = item.quantity - 1;
      state.MakeSale.updateCartQuantity(item.id, newQuantity);
      makeSaleView.updateCartQuantity(item.id, newQuantity);
      const { subTotal, tax, discount, orderTotal } = state.MakeSale.calculateTotals();
      makeSaleView.orderSummaryTotals(subTotal, tax, discount, orderTotal);
    }

   }
  }

  if(e.target.closest('.fa-plus')){
    const id = Number(e.target.parentNode.parentNode.parentNode.parentNode.id.replace('cart-item-', ''));
    if(!state.MakeSale) state.MakeSale = new MakeSale();
    state.MakeSale.readCart()
    const item = state.MakeSale.cart.find(item => item.id === parseInt(id))
    console.log("Item:",item);
    if(item){
      const newQuantity = item.quantity + 1;
      state.MakeSale.updateCartQuantity(item.id, newQuantity);
      makeSaleView.updateCartQuantity(item.id, newQuantity);
    }
  }
});

elements.clearCartBtn.addEventListener("click", ()=>{
  if(!state.MakeSale) state.MakeSale = new MakeSale();
  state.MakeSale.clearCart()
  makeSaleView.clearCartItems()
  makeSaleView.updateSummary(0, 0)
  alert("Cart cleared successfully")
});

elements.checkOutBtn.addEventListener("click", () =>{
   if (!state.MakeSale) state.MakeSale = new MakeSale();

  const totals = state.MakeSale.calculateTotals();

  // Ensure totals exist and the cart isn't empty
  if (!totals || totals.orderTotal === 0) {
    alert("Cart is empty");
    return;
  }
  elements.totalAmountInput.value = totals.orderTotal.toFixed(2);
  transaction.paymentModel()
})

elements.paymentCanBtn.addEventListener('click', ()=>{
   transaction.paymentModel()
})



elements.paymentBtn.addEventListener('click', ()=>{
  alert('payment approved')
})


//On page load
window.addEventListener('load', e=>{
  //Load users
  const user = new User();
  user.readUsers()
  user.users.forEach(user=> userView.displayUser(user))

  //load products 
  const product = new Product();
  product.readProduct()
  //Display products in products page
  product.products.forEach(product=> productView.renderProduct(product,elements.productList, 'productPage'))

  //Display products in sales page
  product.products.forEach(product=> productView.renderProduct(product,elements.saletList, 'salesPage'))

  // load cart
   const makeSale = new MakeSale();
   makeSale.readCart()
   makeSale.getCart()
   makeSale.cart.forEach(product => makeSaleView.renderCartItem(product));
   
  //  load orderSummary
    const { subTotal, tax, discount, orderTotal } = makeSale.calculateTotals();
    makeSaleView.orderSummaryTotals(subTotal, tax, discount, orderTotal);

  //load statistics
})



