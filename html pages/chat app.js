// <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-analytics.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-database.js"></script>



  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBJQRmXJh6JeA7ksGUhedEeGdG0bxCIZas",
    authDomain: "compsci-1aaeb.firebaseapp.com",
    projectId: "compsci-1aaeb",
    storageBucket: "compsci-1aaeb.appspot.com",
    messagingSenderId: "328943486461",
    appId: "1:328943486461:web:56d01217c1c3cbedd3c594",
    measurementId: "G-VNSJEBZ163"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var userName = prompt("Enter Your Name");
 
  function sendMessage() {
      var message = document.getElementById("")
    return false;
  }

  <form onsubmit="return sendMessage();">
    <input id="messaage" placeholder="Enter message" autocomplete="off">
    <input type="submit">
  </form>

