// firebase.auth().onAuthStateChanged(function(user) {
//       window.user = user;
//       // Step 1:
//       //  If no user, sign in anonymously with firebase.auth().signInAnonymously()
//       //  If there is a user, log out out user details for debugging purposes.
//     });
//
//     document.querySelector('#sign-in').addEventListener('click', function(e) {
//       e.preventDefault();
//       e.stopPropagation();
//       var email = document.querySelector('#email').value;
//       var password = document.querySelector('#password').value
//       var credential = firebase.auth.EmailAuthProvider.credential(email, password);
//       var auth = firebase.auth();
//       var currentUser = auth.currentUser;
//
//       // Step 2
//       //  Get a credential with firebase.auth.emailAuthProvider.credential(emailInput.value, passwordInput.value)
//       //  If there is no current user, log in with auth.signInWithCredential(credential)
//       //  If there is a current user an it's anonymous, atttempt to link the new user with firebase.auth().currentUser.link(credential)
//       //  The user link will fail if the user has already been created, so catch the error and sign in.
//     });
//
//     document.querySelector('#sign-out').addEventListener('click', function(e) {
//      e.preventDefault();
//      e.stopPropagation();
//      firebase.auth().signOut();
//    });
//


//Login user

let logInButton = document.getElementById('logIn');

logInButton.addEventListener('click', logInUser)


function logInUser () {

  let email = document.querySelector('#login-email').value;
  let password = document.querySelector('#login-password').value;
  console.log("Email:", email, "Password:", password);

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}


//Create User

let signUpButton = document.getElementById('signUp');

signUpButton.addEventListener('click', signUpUser)


function signUpUser () {

  let email = document.querySelector('#signup-email').value;
  let password = document.querySelector('#signup-password').value;
  console.log("Email:", email, "Password:", password);

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}
