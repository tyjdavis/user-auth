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
