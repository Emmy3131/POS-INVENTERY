import User from "./User";
import Authentication from "./Auth";

export default class Settings {
  constructor(){
    this.userModel = new User();
    this.auth = new Authentication()
  }
  getActiveUser(){
    const activeUser = this.auth.getLoggedInUser()
    return activeUser || null
  }
  updateUserProfile(updates){
    this.userModel.readUsers()
    const currentUser = this.auth.getLoggedInUser()
    if(!currentUser) return false

    const index = this.userModel.users.findIndex(u => u.id === currentUser.id);
    if(index === -1) return false;


    // update only provide field

    this.userModel.users[index]={
      ...this.userModel.users[index],
      ...updates
    }

    this.userModel.persistUser()


    localStorage.setItem('loggedInUser', JSON.stringify(this.userModel.users[index]))

    return this.userModel.users[index]
  }

  changePassword(oldPassword, newPassword){
    const currentUser = this.auth.getLoggedInUser();
    if(!currentUser || currentUser.password !== oldPassword) return false;

    return this.updateUserProfile({password: newPassword})
  }

  changeProfilePicture(base64image){
    return this.updateUserProfile({profilePicture:base64image})
  }

}