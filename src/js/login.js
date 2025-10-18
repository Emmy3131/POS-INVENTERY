import User from "./Model/User.js";
import { elements } from "./view/base.js";
import * as authView from "./view/authView.js";
import Authentication from "./Model/Auth.js";

const state = {}
// const user = new User();
// console.log('my user:', user);
elements.togglePassword.addEventListener('click', authView.togglePassword);

elements.loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const input = authView.getloginInput();
  
  if (input.email && input.password) {
    if (!state.auth) state.auth = new Authentication();
    
    const isLoggedIn = state.auth.login(input.email, input.password);
    if (isLoggedIn) {
      location.assign('index.html')
      // document.getElementById('loginPage').classList.add('hidden');
      // document.getElementById('mainApp').classList.remove('hidden');
      authView.clearLoginInput();
    } else {
      alert("Invalid email or password");
    }
  } else {
    alert("Please fill in all required fields.");
  }
});