import { elements } from "./base.js";

export const profileSectionView = () => {
  elements.profileSection.classList.remove("hidden");
  elements.passwordSection.classList.add("hidden");


  elements.profileBtn.classList.add("bg-green-900", "text-white");
  elements.passwordBtn.classList.remove("bg-green-900", "text-white");
  elements.passwordBtn.classList.add("text-gray-700");
}

export const passwordSectionView = () => {
  elements.passwordSection.classList.remove("hidden");
  elements.profileSection.classList.add("hidden");

  elements.passwordBtn.classList.add("bg-green-900", "text-white");
  elements.profileBtn.classList.remove("bg-green-900", "text-white");
  elements.profileBtn.classList.add("text-gray-700");
}

export const displayUserProfile = (user) =>{
  if(!user) return;

  // fill the profile filds
  if(elements.settingsProfileName) elements.settingsProfileName.value = user.name || '';
  if(elements.settingsProfilePhone) elements.settingsProfilePhone.value = user.phone || '';
  if(elements.settingsProfileEmail) elements.settingsProfileEmail.value = user.email || '';
  
  if (elements.settingsProfilePicture) {
    elements.settingsProfilePicture.src = user.profilePicture || './userImage/default.jpg';
  }
}

export const getProfileInput =()=>{
  return{
    name: elements.settingsProfileName.value,
    phone: elements.settingsProfilePhone.value,
    email: elements.settingsProfileEmail.value,
  }
}

export const getPasswordInput =()=>{
  return{
    oldPassword: elements.oldPassword.value,
    newPassword: elements.newPassword.value,
  }
}

export const updateProfilePicture = (callback) => {
  elements.settingsProfileImageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(ev) {
      const base64 = ev.target.result;
      elements.settingsProfilePicture.src = base64;
      callback(base64);
    };
    reader.readAsDataURL(file);
  });
};
