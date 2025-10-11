import { elements } from "./base.js";


export const paymentModel=()=>{
  elements.paymentContainer.classList.toggle('hidden')
}

export const rendertransaction = (tr)=>{
  elements.transList = "";
  const transMakeUp = `
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 font-medium text-gray-900">${tr.invoiceId}</td>
                <td class="px-6 py-4 text-gray-700">${tr.productName}</td>
                <td class="px-6 py-4 text-gray-900 font-semibold">${tr.amount}</td>
                <td class="px-6 py-4 text-gray-700">${tr.paymentMethod}</td>
                <td class="px-6 py-4 text-gray-700">${tr.date}</td>
                <td class="px-6 py-4 text-blue-600 font-medium">${tr.status}</td>
                <td class="px-6 py-4 flex gap-3">
                  <button class="text-blue-600 hover:text-blue-800">
                    <i class="fas fa-eye"></i>
                  </button>
                  <button class="text-gray-700 hover:text-black">
                    <i class="fas fa-download"></i>
                  </button>
                </td>
              </tr>
  
  
  `
  elements.transList.insertAdjacentHTML("beforeend", transMakeUp)
  
  

}