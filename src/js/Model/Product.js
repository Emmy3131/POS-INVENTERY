export default class Product {
  constructor (){
    this.products = [];
  }

  addProduct(name, price, discription, quantity, category, productImage){
    this.readProduct()
    const id = Date.now()
    const newProduct = {name, price, discription, quantity, category, productImage, id};
    this.products.push(newProduct);
    this.persistProduct()
    return newProduct
  }

  getProducts(){
    this.readProduct()
    return this.products;
  }
  getProduct(id){
    this.readProduct() 
    const product = this.products.find(product => product.id === parseInt(id));
    return product;
  }

   
  deleteProduct(id){
    this.readProduct()   
    this.products = this.products.filter(product => product.id !== parseInt(id)); 
    this.persistProduct()
  }

  editProduct(id, updatedData){
    this.readProduct
    const productIndex = this.products.findIndex(product => product.id === parseInt(id));
    if(productIndex !== -1){
      this.products[productIndex]= {
        ...this.products[productIndex],
        ...updatedData
      }   
      this.persistProduct()

    }
    
  }

  persistProduct(){
    localStorage.setItem("products", JSON.stringify(this.products))
  }

  readProduct(){
    const products = JSON.parse(localStorage.getItem("products"))
    if(products){
      this.products = products
    }
  }
}