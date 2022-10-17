
// Initialize Firebase

 const config = {

    apiKey: "AIzaSyCr_tQKCPR0i3IVkxMx40H8HmHd93GvrYc",

    authDomain: "inapp-96885741.firebaseapp.com",

    databaseURL: "https://inapp-96885741.firebaseio.com",

    projectId: "inapp-96885741",

    storageBucket: "inapp-96885741.appspot.com",

    messagingSenderId: "1031749484359",

    appId: "1:1031749484359:web:4416e21fd80f2a7d97d662"

  };


  firebase.initializeApp(config);



  
  
  function sendMessage(e) {
  
	//   var userID = e.target.getAttribute("child-key");
  
	//   const userRef = dbRef.child('users/' + userID);
	//   const userDetailUI = document.getElementById("userDetail");
  
	//   userDetailUI.innerHTML = ""
  
	//   userRef.on("child_added", snap => {
  
  
	// 	  var $p = document.createElement("p");
	// 	  $p.innerHTML = snap.key  + " - " +  snap.val()
	// 	  userDetailUI.append($p);
  
  
	//   });

	var enqueryRef = firebase.database().ref("enquiry/");

	enqueryRef.push ({
		name: "John",
		number: 1,
		age: 30
	 });
	 

alert("enquery submitted");
  
  }