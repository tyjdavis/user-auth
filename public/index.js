//
// function UserAuth() {
//   this.checkSetup();
//
//   // Shortcuts to DOM Elements.
//   this.messageList = document.getElementById('messages');
//   this.messageForm = document.getElementById('message-form');
//   this.messageInput = document.getElementById('message');
//   this.submitButton = document.getElementById('submit');
//   this.submitImageButton = document.getElementById('submitImage');
//   this.imageForm = document.getElementById('image-form');
//   this.mediaCapture = document.getElementById('mediaCapture');
//   this.userPic = document.getElementById('user-pic');
//   this.userName = document.getElementById('user-name');
//   this.signInButton = document.getElementById('logIn');
//   this.signUpButton = document.getElementById('signUp');
//   this.signInSnackbar = document.getElementById('must-signin-snackbar');
//   this.emailLogin = document.getElementById('login-email');
//   this.passwordLogin = document.getElementById('login-password');
//   this.errorDiv = document.getElementById('login-error');
//   this.emailSignUp = document.getElementById('login-email');
//   this.passwordSignUp = document.getElementById('login-password');
//
//
//   // this.messageForm.addEventListener('submit', this.saveMessage.bind(this));
//   this.signInButton.addEventListener('click', this.logInUser.bind(this));
//   this.signUpButton.addEventListener('click', this.signUpUser.bind(this));
//
//
//
// UserAuth.prototype.logInUser = function() {
//   let email = this.emailLogin.value;
//   let password = this.passwordLogin.value;
//   let errorDiv = this.errorDiv;
//
//   firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     let errorCode = error.code;
//     let errorMessage = error.message;
//     errorDiv.textContent = errorMessage;
//   });
//   JWT();
// }
//
// function JWT () {
//   firebase.auth().currentUser.getToken(true).then(function(idToken) {
//     console.log(idToken);
//     }).catch(function(error) {
//       // Handle error
//     });
//   }
//
//
//
// UserAuth.prototype.signUpUser = function() {
//   let email = this.emailSignUp.value;
//   let password = this.passwordSignUp.value;
//   let errorDiv = this.errorDiv;
//
//   console.log("Email:", email, "Password:", password);
//
//
//   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     errorDiv.textContent = errorMessage;
//     console.log(errorMessage);
//   });
// }
//
// }
//
//
//
// UserAuth.prototype.checkSetup = function() {
//   if (!window.firebase || !(firebase.app instanceof Function) || !firebase.app().options) {
//     window.alert('You have not configured and imported the Firebase SDK. ' +
//         'Make sure you go through the codelab setup instructions and make ' +
//         'sure you are running the codelab using `firebase serve`');
//   }
// };
//
//
//
//
// window.onload = function() {
//   window.userAuth = new UserAuth();
// };
//

/////////////////////////

//Login user



let logInButton = document.getElementById('logIn');
logInButton.addEventListener('click', logInUser)


function logInUser () {

  let email = document.querySelector('#login-email').value;
  let password = document.querySelector('#login-password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(user){
    if(user){
      $('.messagesection').show();
    }
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
    JWT();
}

//prints the JWT of the user to the console
function JWT () {
  firebase.auth().currentUser.getToken(true).then(function(idToken) {
    console.log(idToken);
    }).catch(function(error) {
      // Handle error
    });
}


//Create User

let signUpButton = document.getElementById('signUp');
signUpButton.addEventListener('click', signUpUser)


function signUpUser () {

  let email = document.querySelector('#signup-email').value;
  let password = document.querySelector('#signup-password').value;
  //let errorDiv = document.querySelector('.signup-error');
  console.log("Email:", email, "Password:", password);


  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(user) {
    if (user) {
      $('.messagesection').show();
      console.log(user.uid);
    }
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    //errorDiv.textContent = errorMessage;
    console.log(errorMessage);
  });
}



//messaging

let messageButton = document.getElementById('message-button');
messageButton.addEventListener('click', message);

function message () {
  let messageText = document.querySelector('#message').value;
  console.log(messageText);
}





// Initialize Firebase
var config = {
  apiKey: "AIzaSyDNG_Quc7OiSfplBGjcYDA7B37GRZ13gZY",
  authDomain: "user-auth-25bd3.firebaseapp.com",
  databaseURL: "https://user-auth-25bd3.firebaseio.com",
  projectId: "user-auth-25bd3",
  storageBucket: "user-auth-25bd3.appspot.com",
  messagingSenderId: "829467504471"
};
firebase.initializeApp(config);
