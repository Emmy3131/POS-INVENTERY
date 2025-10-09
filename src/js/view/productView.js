import { elements } from "../view/base.js";

export const newProductCard = () => {
  elements.addProduct.classList.remove("hidden");
};

export const hideProductCard = () => {
  elements.addProduct.classList.add("hidden");
};

let productImage;
export const getProductInput = () => {
  const name = elements.proInputName.value;
  const price = elements.proInputPrice.value;
  const discription = elements.proInputDiscription.value;
  const category = elements.productCategory.value;
  const quantity = elements.proInputQuantity.value;
  return { name, price, discription, category, quantity, productImage };
};

elements.proInputPicture.addEventListener("change", (e) => {
  const file = elements.proInputPicture.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    productImage = e.target.result;
  };
  reader.readAsDataURL(file);
});

export const clearProductInput = () => {
  elements.proInputName.value = "";
  elements.proInputPrice.value = "";
  elements.proInputDiscription.value = "";
  elements.proInputQuantity.value = "";
  elements.productCategory.value = "";
  elements.proInputPicture.value = "";
};

export const renderProducts = (products) => {
  elements.productList.innerHTML = "";

  products.forEach((product) => {
    const markup = `
      <div class="bg-white rounded-2xl shadow p-4 flex flex-col" id='${
        product.id
      }'>
                <img src="${product.productImage}" alt="${product.name}"
                  class="w-full h-40 object-cover rounded-lg mb-4">
                <h3 class="text-lg font-semibold">${product.name}</h3>
                <p class="text-sm text-gray-500">${product.discription}</p>

                <div class="flex justify-between items-center mt-4">
                  <span class="text-xl font-bold text-gray-900">${parseInt(
                    product.price
                  ).toLocaleString()}</span>
                  <span class="text-md font-medium text-gray-600">Qty: ${
                    product.quantity
                  }</span>
                  <div class="flex gap-2">
                    <button class="product-edit p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200">
                      <i class="fas fa-pen "></i>
                    </button>
                    <button class="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
                      <i class="fas fa-trash product-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
      `;
    elements.productList.insertAdjacentHTML("beforeend", markup);
  });
};

export const renderProduct = (product, container, pageType = "productPage") => { 
  const productControl = `
   <button id = "productEdit" class="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200">
    <i class="fas fa-pen product-edit"></i>
  </button>
  <button class="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
    <i class="fas fa-trash product-trash"></i>
  </button>`;
  const makeSaleControl = `
    <button class="p-2 bg-gray-100 text-blue-600 rounded-full text-[24px] hover:bg-red-200">
       <i class="fas fa-plus add-to-cart"></i>
    </button>
  
  `;
  const markup = `
   <div class="bg-white rounded-2xl shadow p-4 flex flex-col" id='${
     product.id
   }'>
            <img src="${product.productImage}" alt="${product.name}"
              class="w-full h-40 object-cover rounded-lg mb-4">
            <h3 class="text-lg font-semibold">${product.name}</h3>
            <p class="text-sm text-gray-500">${product.discription}</p>

            <div class="flex justify-between items-center mt-4">
              <span class="text-xl font-bold text-gray-900">${parseInt(
                product.price
              ).toLocaleString()}</span>
              <span class="quantity text-md font-medium text-gray-600">Qty: ${
                product.quantity
              }</span>
              <div class="flex gap-2">
              ${pageType === "productPage" ? productControl : makeSaleControl}
               
              </div>
            </div>
          </div>
  `;
  container.insertAdjacentHTML("beforeend", markup);
};

export const deleteProduct = (id) => {
  const el = document.getElementById(`${id}`);
  if (el) {
    el.parentNode.removeChild(el);
  }
};
export const editProduct = (product) => {
  elements.proInputName.value = product.name;
  elements.proInputPrice.value = product.price;
  elements.proInputDiscription.value = product.discription;
  elements.productCategory.value = product.category;
  elements.proInputQuantity.value = product.quantity;
  elements.newProductBtn.classList.add("hidden");
  elements.editProductBtn.classList.remove("hidden");
  productImage = product.productImage;
};
