import { elements } from "./base.js";

export const togglePassword = () =>{
  const type = elements.loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  elements.loginPassword.setAttribute('type', type);
  elements.togglePassword.innerHTML = type === "password"
        ? '<i class="fas fa-eye"></i>'
        : '<i class="fas fa-eye-slash"></i>';
}

export const getloginInput = ()=>{
  elements.loginEmail.value;
  elements.loginPassword.value;
  return {
    email: elements.loginEmail.value,
    password: elements.loginPassword.value
  }
}

export const clearLoginInput = () =>{
  elements.loginEmail.value = '';
  elements.loginPassword.value = '';
}