import { elements } from "./base.js";

export const renderTotals = (totals) => {
  if (!totals) return;

  if (elements.totalUsers) elements.totalUsers.textContent = totals.totalUsers;
  if (elements.totalProducts) elements.totalProducts.textContent = totals.totalProducts;
  if (elements.totalSales) elements.totalSales.textContent = totals.totalSales;
  if (elements.totalTransactions) 
    elements.totalTransactions.innerHTML = `&#8358;${totals.transaction.toLocaleString()}`;
};
