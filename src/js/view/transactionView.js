import { elements } from "./base.js";


export const paymentModel=()=>{
  elements.paymentContainer.classList.toggle('hidden')
}

export const itemDetailsMOdel=()=>{
  elements.transItems.classList.toggle('hidden')
}

export const transactionDetailsView = (items) => {
  const container = elements.transItems;
  container.innerHTML = ""; // ✅ Clear old items before rendering new ones

  if (!items || items.length === 0) {
    container.insertAdjacentHTML(
      "beforeend",
      `<p class="text-center text-gray-500 py-4">No items found</p>`
    );
    return;
  }

  items.forEach((item) => {
    const itemMarkup = `
      <div class="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm mb-3">
        <div class="w-24 h-20 flex-shrink-0">
          <img src="${item.productImage || 'https://via.placeholder.com/100'}" 
               alt="${item.productName || 'Product'}" 
               class="object-cover w-full h-full rounded-md border border-gray-200">
        </div>
        <div class="ml-4 flex-1">
          <h3 class="truncate w-32 font-semibold text-gray-800">${item.productName || 'Unnamed Product'}</h3>
          <p class="text-gray-600 text-sm">Qty: ${item.quantity || 1}</p>
          <p class="text-gray-800 font-medium mt-1">₦${item.price || 0}</p>
        </div>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", itemMarkup);
  });
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
          <td class="px-6 py-4 text-gray-700">${tr.productName}</td>
          <td class="px-6 py-4 text-gray-900 font-semibold">${tr.orderTotal}</td>
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
