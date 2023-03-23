var firebaseConfig = {
    apiKey: "AIzaSyAEUyvjGyG9jEqq6JHpqDhRyZeZScqnzvI",
    authDomain: "resurrectedbird.firebaseapp.com",
    projectId: "resurrectedbird",
    storageBucket: "resurrectedbird.appspot.com",
    messagingSenderId: "417546837512",
    appId: "1:417546837512:web:94db92c57fec073b56bbbd",
    measurementId: "G-9EMKJFXP06"
  };
  /// Initialize Firebaese
  firebase.initializeApp(firebaseConfig);
/// Initialize Firebaese
const auth = firebase.auth()
const database = firebase.database()

////set up our register function
function register (){
    /// inpute fields
    fname = document.getElementById('fname').value
    email = document.getElementById('email').value
    password =document.getElementById('password').value
    confirmpassword = document.getElementById('Confirm_password').value
////
auth.createUserWithEmailAndPassword(email,password)  
.then(function(){
var user =auth.currentUser


var database_ref = database.ref()

 //////// create user data
 var user_data = {
    email: email,
    fname : fname
    last_login : Date.now()
 }
 database_ref.child('users/' +user.uid).set(user_data)





alert('User Created!')
})
.catch(function(error){
    var errot_code = error.error.code
    var error_message = error.message
    alert(error_message)
})
}


}