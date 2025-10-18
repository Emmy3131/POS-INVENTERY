import { elements } from "./base.js";

export const profileSectionView = () => {
  elements.profileSection.classList.remove("hidden");
  elements.passwordSection.classList.add("hidden");


  elements.profileBtn.classList.add("bg-green-900", "text-white", "active");
  elements.passwordBtn.classList.remove("bg-green-900", "text-white", "active");
  elements.passwordBtn.classList.add("text-gray-700");

}

export const passwordSectionView = () => {
  elements.passwordSection.classList.remove("hidden");
  elements.profileSection.classList.add("hidden");

  elements.passwordBtn.classList.add("bg-green-900", "text-white", "active");
  elements.profileBtn.classList.remove("bg-green-900", "text-white", "active");
  elements.profileBtn.classList.add("text-gray-700");
}

export const displayUserProfile = (user) =>{
  if(!user) return;

  // fill the profile filds
  if(elements.settingsProfileName) elements.settingsProfileName.value = user.name || '';
  if(elements.settingsProfilePhone) elements.settingsProfilePhone.value = user.phone || '';
  if(elements.settingsProfileEmail) elements.settingsProfileEmail.value = user.email || '';
  if(elements.profileName) elements.profileName.innerHTML = user.name || '';
  if(elements.profilePhone) elements.profilePhone.innerHTML = user.phone || '';
  if(elements.profileEmail) elements.profileEmail.innerHTML = user.email || '';
  if(elements.userName) elements.userName.innerHTML = user.name.trim() || '';

  if (elements.settingsProfilePicture) {
    elements.settingsProfilePicture.src = user.profileImage || './userImage/default.jpg';
  }
}

let profileImage;

export const getProfileInput =()=>{
  return{
    name: elements.settingsProfileName.value,
    phone: elements.settingsProfilePhone.value,
    email: elements.settingsProfileEmail.value,
    profileImage: profileImage ? profileImage : elements.settingsProfilePicture.src

  }
}

elements.settingsProfileImageInput.addEventListener('change', e=>{
  const file = elements.settingsProfileImageInput.files[0]
    const reader = new FileReader();
    reader.onload = function(e){
      profileImage = e.target.result;
    }
    reader.readAsDataURL(file);
    
 })
 

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
