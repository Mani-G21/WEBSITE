const firebaseConfig = {
    apiKey: "AIzaSyBKm3pjZFIZiKJXZ_zprFy-uTGeows5E_M",
    authDomain: "gripflex-a7915.firebaseapp.com",
    databaseURL: "https://gripflex-a7915-default-rtdb.firebaseio.com",
    projectId: "gripflex-a7915",
    storageBucket: "gripflex-a7915.appspot.com",
    messagingSenderId: "887078322627",
    appId: "1:887078322627:web:5e4976f21a1b9f9b0cbd76"
  };

  const firebaseConfigFirestore = {
    apiKey: "AIzaSyBKm3pjZFIZiKJXZ_zprFy-uTGeows5E_M",
    authDomain: "gripflex-a7915.firebaseapp.com",
    projectId: "gripflex-a7915",
  }

  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  const firebaseAppFirestore = firebase.initializeApp(firebaseConfigFirestore, "Firestore");
  const dbFirestore = firebaseAppFirestore.firestore();

  //refernce for database
  const usersDB = firebase.database().ref('users');

  document.getElementById('users').addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();
   
    var fname = getElementVal("signup-fname");
    var lname = getElementVal("signup-lname");
   var email = getElementVal("signup-email");
    var number = getElementVal("signup-number");
    var password = getElementVal("signup-password")
  
    
    saveMessagesFirestore(dbFirestore, fname, lname, email, number, password);
    saveMessages(fname, lname, email, number, password);
  }

  function saveMessagesFirestore(db, fname, lname, email, number, password) {
    db.collection("contactForm").add({
       fname: fname,
       lname: lname,
       email: email,
       number: number,
       password: password,
    });
}

  const saveMessages = (fname, lname, email, number, password) => {
    var newUser = usersDB.push();
    newUser.set({
        fname: fname,
       lname: lname,
       email: email,
       number: number,
       password: password,
        
    });
    window.location.href = 'index.html';
  }
  const getElementVal = (id) =>{
    return document.getElementById(id).value;
  };
  