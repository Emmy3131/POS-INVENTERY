import { elements } from "./base.js";

export const initCartPage = () => {
  elements.myCartList.addEventListener("click", () => {
    document.querySelectorAll(".pages").forEach((page) => {
      if (page.id === "make-sale") {
        page.classList.remove("hidden");
      } else {
        page.classList.add("hidden");
      }
    });
    // Update active state in sidebar
    elements.navLinks.forEach((link) => {
      link.classList.remove("bg-black", "text-green-400"); // remove active from all
      if (link.getAttribute("href") === "#make-sale") {
        link.classList.add("bg-black", "text-green-400"); // add active to Make Sale
      }
    });
    elements.saletList.classList.add("hidden");
    elements.cartModel.classList.remove("hidden");
  });
};

export const renderCartItem = (item) => {
  const cartItemId = `cart-item-${item.id}`; 
  const cartItemMarkup = `
              <div class="cart-item flex items-center bg-white shadow rounded-xl p-4 mb-4 overflow-hidden" id='${cartItemId}'>
                  <!-- Image -->
                  <div class="w-32 h-28 flex-shrink-0">
                    <img src="${item.productImage}" alt="${item.name}" class="object-cover w-full h-full rounded-lg">
                  </div>

                  <!-- Item Info -->
                  <div class="ml-4 flex-1">
                    <h3 class="font-semibold text-lg">${item.name}</h3>
                    <p id='itemQuantity-${item.id}' class="quantity text-gray-600 font-bold text-[19px] mt-1">Quantity: ${item.quantity || 1} </p>

                    <p class="text-lg font-semibold text-gray-900">₦${parseInt(item.price).toLocaleString()}</p>
                  </div>

                  <!-- Price + Delete -->
                  <div class="flex flex-col items-end">
                    <button class="mt-2 text-red-500 hover:text-red-700 text-xl">
                      <i class="fas fa-trash cart-trash"></i>
                    </button>

                  <div class=" bg-gray-400 rounded-lg p-1">
                  <!-- Decrease -->
                  <button class="text-red-500 hover:text-red-700 text-xl">
                    <i class="fas fa-minus"></i>
                  </button>

                  <!-- Increase -->
                  <button class="text-blue-600 hover:text-green-700 text-xl">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>

                  </div>
                </div>
          `;
  document
    .getElementById("cartList")
    .insertAdjacentHTML("beforeend", cartItemMarkup);
};



export const deleteCartItem = (id) => {
  const cartItemId = `cart-item-${id}`;
  const el = document.getElementById(cartItemId); 
  if (el) {
    const parentElement = el.parentElement
    console.log('parentElementlemetn',parentElement)
    /*
     * ISSUE & SOLUTION:
     * The problem was that parentElement was returning the productList div instead of cartList div.
     * This happened because both product items and cart items were using the same ID (item.id).
     * When we tried to delete a cart item, it was finding the product item with the same ID in productList.
     * 
     * SOLUTION:
     * Modified renderCartItem to use unique IDs by prefixing with 'cart-item-'
     * This ensures cart items and product items don't have ID conflicts.
     */
    el.parentElement.removeChild(el)
  }
};

export const clearCartItems = () => {
  document.getElementById("cartList").innerHTML = "";
}

export const updateCartQuantity = (id, newQuantity) => {
 const cartItem = document.getElementById(`cart-item-${id}`);
  console.log(cartItem);
  if (!cartItem) {
    console.error(`Cart item with id ${id} not found in DOM`);
    return;
  }
  
  const quantityElement = document.getElementById(`itemQuantity-${id}`);
  console.log(quantityElement);
  
  
  if (!quantityElement) {
    console.error(`No .quantity element found inside cart item ${id}`);
    return;
  }
  quantityElement.textContent = `Quantity: ${newQuantity}`;
};

export const orderSummaryTotals = (subTotal, tax, discount, orderTotal) => {
  elements.subTotal.textContent = `₦${parseInt(subTotal).toLocaleString()}`;
  elements.tax.textContent = `₦${parseInt(tax).toLocaleString()}`;
  elements.discount.textContent = `₦${parseInt(discount).toLocaleString()}`;
  elements.orderTotal.textContent = `₦${parseInt(orderTotal).toLocaleString()}`;
}

// For future use
export const clearOrderSummary = () => {
  elements.subTotal.textContent = `₦0`;
  elements.tax.textContent = `₦0`;
  elements.discount.textContent = `₦0`;
  elements.orderTotal.textContent = `₦0`;
}