export default class Authentication{
  constructor(){
    this.users = JSON.parse(localStorage.getItem('users')) || [];
  }
  readusers(){
    this.users = JSON.parse(localStorage.getItem('users')) || [];
  }

  login(email, password){
    this.readusers();
    const user = this.users.find(user => user.email === email && user.password === password);
    
    if(user){
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return user;
    }else{
      return null;
    }
  }

  logout(){
    localStorage.removeItem('loggedInUser');
  }

  getLoggedInUser(){
    return JSON.parse(localStorage.getItem('loggedInUser'));
  }

  isLoggedIn(){
    return localStorage.getItem('loggedInUser') !== null;
  }
}