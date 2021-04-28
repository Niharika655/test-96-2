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
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";

}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();