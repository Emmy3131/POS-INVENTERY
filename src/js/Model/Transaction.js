export default class{
  constructor(){
    this.transactions = []
  }
 
 read(){
  var storage = JSON.parse(localStorage.getItem('transactions'))
  if(storage)this.transactions = storage
 }

 persist(){
  localStorage.setItem('transactions', JSON.stringify(this.transactions))
 }
 recordTransaction(invoiceId,orderTotal, paymentMethod, date, status, items){

  const id = new Date().getTime()
  const newTransaction = {invoiceId, orderTotal, paymentMethod, date, status,items, id}
 
  this.read()
  this.transactions.push(newTransaction)
  this.persist()
  return newTransaction
 }
 getAllTransactions(){
  this.read()
  return this.transactions
 }

}