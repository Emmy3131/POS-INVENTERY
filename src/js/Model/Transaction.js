export default class{
  constructor(){
    this.transaction = []
  }
 
 read(){
  this.transaction = JSON.parse(localStorage.getItem(this.transaction)) || []
 }

 persist(){
  localStorage.setItem('transaction', JSON.stringify(this.transaction))
 }
 recordTransaction(invoiceId, productName,amount, paymentMethod, date, status){
  const id = new Date().getTime()
  const newTransaction = {invoiceId, productName, amount, paymentMethod, date, status, id}
  this.read()
  this.transaction.push(newTransaction)
  this.persist()
  return newTransaction
 }
}