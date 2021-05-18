
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyALlAo3lY2xzqY0n-zC9shlBk0J8B2QFNk",
      authDomain: "let-s-chat-e9729.firebaseapp.com",
      projectId: "let-s-chat-e9729",
      storageBucket: "let-s-chat-e9729.appspot.com",
      messagingSenderId: "737508994954",
      appId: "1:737508994954:web:1ba5f06d6f1cc2dcb56273"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
