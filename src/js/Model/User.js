export default class User {
 
  constructor() {
    this.users = [];
  }

  addUser(name, phone, password, email, profileImage){
    this.readUsers()
    const id = new Date().getTime()
    const user = {name, phone, password, email, profileImage, status:'active', id}
    this.users.push(user);
    this.persistUser(); 
    
    return user
  }
  deleteUser(id){
    this.readUsers()
    const index = parseInt(this.users.findIndex(user => user.id === id))
    if(index !== -1){
      this.users.splice(index, 1)
      this.persistUser()
    }
    
  }
  updateUserStatus(id){
    this.readUsers()
    const user = this.users.find(user => user.id === id)
    if(user){
      user.status === 'active'? user.status='deactivated' : user.status='active'
      this.persistUser()
    }
    return user;
   
  }


  persistUser(){
    localStorage.setItem("users", JSON.stringify(this.users))

  }

  readUsers(){
    const users =JSON.parse(localStorage.getItem('users'));
    if(users){
      this.users=users;
    } 
    
  }
}











