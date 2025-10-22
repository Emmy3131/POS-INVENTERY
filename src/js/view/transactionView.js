import { elements } from "./base.js";


export const paymentModel=()=>{
  elements.paymentContainer.classList.toggle('hidden')
}

export const itemDetailsMOdel=()=>{
  elements.transItems.classList.toggle('hidden')
}

export const transactionDetailsView = (transaction) => {
  const container = elements.transItems;
  container.innerHTML = "";

  if (!transaction || !transaction.items || transaction.items.length === 0) {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="flex flex-col items-center justify-center py-12 text-center">
        <div class="w-24 h-24 mb-4 text-gray-300">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-16M9 9h6m-6 4h6m-6 4h6"/>
          </svg>
        </div>
        <p class="text-gray-500 text-lg font-medium">No transaction items found</p>
        <p class="text-gray-400 text-sm mt-1">This transaction doesn't contain any items</p>
      </div>`
    );
    return;
  }

  
  const headerMarkup = `
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
      <!-- Main header row -->
      <div class="flex items-start justify-between mb-6">
        <div class="flex items-center space-x-4">
          <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
          </div>
          <div>
            <h2 class="font-bold text-gray-900">Transaction #${transaction.invoiceId || transaction.id}</h2>
            <p class="text-gray-600 mt-1">${transaction.date}</p>
          </div>
        </div>
        
        <div class="text-right">
          <p class="text-xl font-bold text-green-600">₦${transaction.orderTotal?.toLocaleString() || '0'}</p>
          <p class="text-sm text-gray-500 mt-1">Total Amount</p>
        </div>
      </div>

      <!-- Details grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
        <div class="text-center md:text-left">
          <p class="text-sm text-gray-500 font-medium">Customer</p>
          <p class="font-semibold text-gray-900 mt-1">${transaction.customerName}</p>
        </div>
        
        <div class="text-center">
          <p class="text-sm text-gray-500 font-medium">Payment Method</p>
          <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mt-1">
            ${transaction.paymentMethod}
          </span>
        </div>
        
        <div class="text-center md:text-right">
          <p class="text-sm text-gray-500 font-medium">Status</p>
          <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mt-1">
            ${transaction.status}
          </span>
        </div>
      </div>
    </div>
  `;

  // Items Section
  const itemsMarkup = `
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="px-6 py-4 border-b border-gray-100">
        <h3 class="text-lg font-semibold text-gray-900">Items (${transaction.items.length})</h3>
      </div>
      <div class="divide-y divide-gray-100">
        ${transaction.items.map(item => `
          <div class="flex items-center p-6 hover:bg-gray-50 transition-colors duration-150">
            <div class="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
              <img src="${item.productImage || 'https://via.placeholder.com/100?text=Product'}" 
                   alt="${item.productName || 'Product'}" 
                   class="w-full h-full object-cover"
                   onerror="this.src='https://via.placeholder.com/100?text=Product'">
            </div>
            <div class="ml-6 flex-1 min-w-0">
              <h4 class="font-medium text-gray-900 truncate">${item.productName || 'Unnamed Product'}</h4>
              <div class="flex items-center mt-2 space-x-4">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Qty: ${item.quantity || 1}
                </span>
                <span class="text-gray-500 text-sm">•</span>
                <span class="text-gray-600 text-sm">Unit price: ₦${(item.price || 0).toLocaleString()}</span>
              </div>
            </div>
            <div class="text-right ml-4">
              <p class="font-bold text-gray-900">₦${((item.price || 0) * (item.quantity || 1)).toLocaleString()}</p>
              <p class="text-sm text-gray-500 mt-1">${item.price || 0} × ${item.quantity || 1}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Summary Card
  const summaryMarkup = `
    <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 p-6 mt-6">
      <div class="flex justify-between items-center">
        <div>
          <p class="text-gray-600">Total Amount</p>
          <p class="text-xl font-bold text-gray-900 mt-1">₦${transaction.orderTotal?.toLocaleString() || '0'}</p>
        </div>
        <div class="text-right">
          <p class="text-gray-600">Items Total</p>
          <p class="text-xl font-semibold text-gray-900">${transaction.items.length} items</p>
          <p class="text-sm text-gray-500 mt-1">${new Date().toLocaleDateString('en-GB')}</p>
        </div>
      </div>
    </div>
  `;

  // Combine all sections
  container.insertAdjacentHTML("beforeend", headerMarkup);
  container.insertAdjacentHTML("beforeend", itemsMarkup);
  container.insertAdjacentHTML("beforeend", summaryMarkup);
};


export const transactionView = {
  render(transactions) {
    const tableBody = elements.transList;
    tableBody.innerHTML = ""; // clear existing rows

    if (!transactions || transactions.length === 0) {
      tableBody.insertAdjacentHTML(
        "beforeend",
        `<tr><td colspan="7" class="text-center py-4 text-gray-500">No transactions found</td></tr>`
      );
      return;
    }

    transactions.forEach(tr => {
      const transMarkup = `
        <tr id="${tr.id}" class="hover:bg-gray-50">
          <td class="px-6 py-4 font-medium text-gray-900">${tr.invoiceId}</td>
          <td class="px-6 py-4 text-gray-700">${tr.customerName}</td>
          <td class="px-6 py-4 text-gray-900 font-semibold">₦${tr.orderTotal.toLocaleString()}</td>
          <td class="px-6 py-4 text-gray-700">${tr.paymentMethod}</td>
          <td class="px-6 py-4 text-gray-700">${tr.date}</td>
          <td class="px-6 py-4 text-blue-600 font-medium">${tr.status}</td>
          <td class="px-6 py-4 flex gap-3">
            <button id="transDetails" class="text-blue-600 hover:text-blue-800">
              <i class="fas fa-eye"></i>
            </button>
            <button class="text-gray-700 hover:text-black">
              <i class="fas fa-download"></i>
            </button>
          </td>
        </tr>`;
      tableBody.insertAdjacentHTML("beforeend", transMarkup);
    });
  }
};

export const getCustomerName = () =>{
  return elements.customerName.value.trim();
}
