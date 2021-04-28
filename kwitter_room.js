var firebaseConfig = {
    apiKey: "AIzaSyA0wbpHo5woQHqfWFV8VrKrpoC6zm0TG88",
    authDomain: "kwitter-d4930.firebaseapp.com",
    databaseURL: "https://kwitter-d4930-default-rtdb.firebaseio.com",
    projectId: "kwitter-d4930",
    storageBucket: "kwitter-d4930.appspot.com",
    messagingSenderId: "545677431182",
    appId: "1:545677431182:web:fdb78327593890c86d14df"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "Kwitter_page.html";
  }


  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div> <hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
