


//ADD YOUR FIREBASE LINKS (chatapp ref)
const config = {
    apiKey: "AIzaSyD6UILU7duZh1VUehibiSXxFkJE6yGGePo",
      authDomain: "chat-bea0d.firebaseapp.com",
      databaseURL: "https://chat-bea0d-default-rtdb.firebaseio.com",
      projectId: "chat-bea0d",
      storageBucket: "chat-bea0d.appspot.com",
      messagingSenderId: "452177615369",
      appId: "1:452177615369:web:470bad3b1afdb7958836d8",
      measurementId: "G-MBFZD80WT3"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  
  
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  
  