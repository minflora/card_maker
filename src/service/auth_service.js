import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
  logout(){
    firebase.auth().signOut();
  }

  onAuthChange(onUserChange){
    firebase.auth().onAuthStateChanged(user =>{
      onUserChange(user);
    })
  }
}

export default AuthService;
