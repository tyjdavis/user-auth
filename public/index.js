//Login user

let logInButton = document.getElementById('logIn');

logInButton.addEventListener('click', logInUser)


function logInUser () {

  let email = document.querySelector('#login-email').value;
  let password = document.querySelector('#login-password').value;
  let errorDiv = document.querySelector('.login-error');

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    errorDiv.textContent = errorMessage;
  });
    JWT();
}

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
  let errorDiv = document.querySelector('.signup-error');
  console.log("Email:", email, "Password:", password);


  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    errorDiv.textContent = errorMessage;
    console.log(errorMessage);
  });
}
