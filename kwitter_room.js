
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAQ-FTIXl3qP7m8GrLftfJoOUsmQn5kUO4",
      authDomain: "kwitter-4d911.firebaseapp.com",
      databaseURL : "https://kwitter-4d911-default-rtdb.firebaseio.com",
      projectId: "kwitter-4d911",
      storageBucket: "kwitter-4d911.appspot.com",
      messagingSenderId: "931120455439",
      appId: "1:931120455439:web:45dfe5365dcb37e598e87a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
