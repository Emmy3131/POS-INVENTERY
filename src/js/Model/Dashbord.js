export default class Dashboard {
  constructor(){
    this.dashboard = {};
  }

  loadDatas(){
    this.users = JSON.parse(localStorage.getItem('users')) || [];
    this.products = JSON.parse(localStorage.getItem('products')) || [];
    this.sales = JSON.parse(localStorage.getItem('transactions')) || [];
  }
  computeTotals(){
    this.loadDatas()
    const totalUsers = this.users.length;
    const totalProducts = this.products.length;
    const totalSales = this.sales.length;
    const transaction = this.sales.reduce((sum, s)=> sum +(s.orderTotal || 0), 0);


    return {
      totalUsers,
      totalProducts,
      totalSales,
      transaction,
    };
  }
}