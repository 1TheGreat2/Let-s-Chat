// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCodZgFOc95U_c1KBEPbJAFsa7c2P1H-6c",
    authDomain: "kwitter-4a906.firebaseapp.com",
    databaseURL: "https://kwitter-4a906-default-rtdb.firebaseio.com",
    projectId: "kwitter-4a906",
    storageBucket: "kwitter-4a906.appspot.com",
    messagingSenderId: "766357604796",
    appId: "1:766357604796:web:64913ba61a4f48635103b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}