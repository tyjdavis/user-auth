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

  let email = document.getElementById('login-email').value;
  let password = document.getElementById('login-password').value;

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

    //message box
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

  let email = document.getElementById('signup-email').value;
  let password = document.getElementById('signup-password').value;
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

  //message box
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

//message box updating
  let dataObject = firebase.database().ref('data/');
  dataObject.on('value', function(snapshot) {
    if(snapshot.val()){
    console.log(snapshot.val());
    let list = document.getElementById('list');
    list.innerHTML = '';
    let arr = Object.keys(snapshot.val()) //arr is an array of all the keys. nothing else
    arr.map(str=>{
      let li = document.createElement('li');
      li.textContent = snapshot.val()[str].text;
      list.appendChild(li);
    })
  }
});
