export const elements = {
  saleChart:document.getElementById("salesChart"),
  profileBtn: document.getElementById("profile-btn"),
  dropdownMenu: document.getElementById("dropdown-menu"),
  navLinks: document.querySelectorAll(".nav-link"),
  addUserBtn: document.getElementById("userAddBtn"),
  addUserCard: document.getElementById("userCard"),
  userCardCancelBtn: document.getElementById("addUserCardCancelBtn"),
  dashboardPage: document.getElementById("userList-1"),

  userInputName: document.getElementById("userInputName"),
  userInputnum: document.getElementById("userInputnum"),
  userInputPassword: document.getElementById('userInputPassword'),
  userInputEmail: document.getElementById("userInputEmail"),
  userInputPicture: document.getElementById("userInputPicture"),
  newAddBtn: document.getElementById("addUserBtn"),
  userList: document.getElementById("userList"),
  form: document.getElementById("userForm"),

  addProduct: document.getElementById("addProductContainer"),
  productAddBtn: document.getElementById("productAddBtn"),
  editProductBtn:document.getElementById("editProductBtn"),
  productCardCancelBtn: document.getElementById("addProductCardCancelBtn"),
  proInputName: document.querySelector("#proInputName"),
  proInputPrice: document.querySelector("#proInputPrice"),
  proInputPicture: document.querySelector("#proInputPicture"),
  proInputQuantity: document.querySelector("#proInputQuantity"),
  proInputDiscription: document.querySelector("#proInputDiscription"),
  productCategory: document.querySelector("#productCategory"),
  newProductBtn: document.getElementById("addProductBtn"),
  productList: document.querySelector("#ProductList"),
  prductBtnContainer: document.querySelector("#prductBtnContainer"),

  saletList: document.querySelector("#saletList"),
  myCartList: document.getElementById("cartIcon"),
  cartModel: document.querySelector("#cartSection"),
  closeCartModel: document.querySelector("#closeCartModel"),
  clearCartBtn: document.querySelector("#clearCartBtn"),

  subTotal: document.getElementById("subTotal"),
  tax: document.getElementById("tax"),
  discount: document.getElementById("discount"),
  orderTotal: document.getElementById("orderTotal"),

  paymentContainer: document.getElementById('paymentContainer'),
  checkOutBtn: document.getElementById('checkOutBtn'),
  paymentBtn: document.getElementById('paymentBtn'),
  totalAmountInput: document.getElementById('totalAmountInput'),
  paymentCanBtn: document.getElementById('paymentCanBtn')
}

export const toggleProfileMenu = () => {
  elements.dropdownMenu.classList.toggle("hidden");
  elements.profileBtn.classList.toggle("active");    
};

export const sidebarLinks =() => {
  elements.navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if(!href) return;
       const targetId = this.getAttribute('href').substring(1);
       
      // Remove 'active' class from all links
      elements.navLinks.forEach(lnk => lnk.classList.remove('bg-black', 'text-green-400'));
      // Add 'active' class to the clicked link
      this.classList.add('bg-black', 'text-green-400');

      // Show corresponding page and hide others
       
        document.querySelectorAll('.pages').forEach(page => {
          if (page.id === targetId) {
            page.classList.remove('hidden');

            if(targetId === 'make-sale'){
              elements.saletList.classList.remove('hidden');
              elements.cartModel.classList.add('hidden');
            }
          } else {
            page.classList.add('hidden');
          }
        });
    });
  })
}
export const makeSaleCart = () =>{

}






