var firebaseConfig = {
  apiKey: "AIzaSyALlAo3lY2xzqY0n-zC9shlBk0J8B2QFNk",
  authDomain: "let-s-chat-e9729.firebaseapp.com",
  databaseURL: "https://let-s-chat-e9729-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-e9729",
  storageBucket: "let-s-chat-e9729.appspot.com",
  messagingSenderId: "737508994954",
  appId: "1:737508994954:web:1ba5f06d6f1cc2dcb56273"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

