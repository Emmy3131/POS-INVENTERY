import { elements } from "./base.js";

export const showUserCard = () => { elements.addUserCard.classList.remove("opacity-0", "scale-95", "pointer-events-none"); }

export const hideUserCard = () => { elements.userCardCancelBtn.addEventListener('click', () => { elements.addUserCard.classList.add("opacity-0", "scale-95", "pointer-events-none"); })}


let profileImage;
export const getUserInput = () => {
  const name = elements.userInputName.value;
  const phone = elements.userInputnum.value;
  const password = elements.userInputPassword.value;
  const email = elements.userInputEmail.value;
  return { name, phone, password, email, profileImage };
};

 elements.userInputPicture.addEventListener('change', e=>{
  const file = elements.userInputPicture.files[0]
    const reader = new FileReader();
    reader.onload = function(e){
      profileImage = e.target.result;
    }
    reader.readAsDataURL(file);
    
 })
 


export const clearUserInput = () => {
  elements.userInputName.value = '';
  elements.userInputnum.value = '';
  elements.userInputPassword = '';
  elements.userInputEmail.value = '';
  elements.userInputPicture.value = '';
}


export const displayUser = (user) => {
  const today = new Date();
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate = today.toLocaleDateString('en-GB', options).replace(/\//g, '-');
  const markup = `
  <tr id="${user.id}" class="hover:bg-gray-50">
                  <!-- User -->
                  <td class="py-4 px-4 flex items-center gap-3">
                    <img src="${user.profileImage}" alt="avatar" class="w-10 h-10 rounded-full">
                    <span class="font-medium">${user.name}</span>
                  </td>
                  <!-- Email -->
                  <td class="py-4 px-6">${user.email}</td>
                  <!-- Phone -->
                  <td class="py-4 px-6">${user.phone}</td>
                  <!-- Date -->
                  <td class="py-4 px-6">${formattedDate}</td>
                  <!-- Status -->
                  <td class="py-4 px-6">
                    <span class="text-blue-600 font-medium status-${user.id}">${user.status}</span>
                  </td>
                  <!-- Actions -->
                  <td class="py-4 px-6 flex justify-center gap-3">
                    <button class="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200">
                      <i class="fas fa-user-edit"></i>
                    </button>
                    <button class="p-2 bg-gray-100 text-gray-500 rounded-lg hover:bg-gray-200">
                      <i class="fas fa-user"></i>
                    </button>
                    <button class="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
                      <i class="fas fa-user-times"></i>
                    </button>
                  </td>
                </tr>`
  document.querySelectorAll('.eachUser').forEach(userRow => {
    userRow.insertAdjacentHTML('beforeend', markup);
  });
}

export const updateUserStatusView = user=>{
  const className = `status-${user.id}`
  const fields =   document.querySelectorAll(`.${className}`);  
  document.querySelectorAll(`.${className}`).forEach(field=>{
    field.textContent=user.status
  })
}