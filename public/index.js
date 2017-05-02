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

let database = firebase.database();
let data = firebase.database().ref('data');


//Logging Existing User in

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
    let messageButton = document.getElementById('message-button');
    messageButton.addEventListener('click', message);

    function message () {
      let messageText = document.getElementById('message').value;

      firebase.database().ref('data/').push({
        email: email,
        text: messageText,
      });
    }
  JWT();
}

function JWT () {
  firebase.auth().currentUser.getToken(true).then(function(idToken) {
    console.log(idToken);
    }).catch(function(error) {
    });
}


//Creating a New User

let signUpButton = document.getElementById('signUp');
signUpButton.addEventListener('click', signUpUser)

function signUpUser () {

  let email = document.querySelector('#signup-email').value;
  let password = document.querySelector('#signup-password').value;
  console.log("Email:", email, "Password:", password);


  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(user) {
    if (user) {
      $('.messagesection').show();
      console.log(user.uid);
    }
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
  let messageButton = document.getElementById('message-button');
  messageButton.addEventListener('click', message);

  function message () {
    let messageText = document.getElementById('message').value;

    firebase.database().ref('data/').push({
      email: email,
      text: messageText,
    });
  }
}
