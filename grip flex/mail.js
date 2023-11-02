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
  const contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    var imageUrl = urlParams.get('image'); // Get image URL from the query parameter
    var itemname = urlParams.get('product'); // Get product name from the query parameter
    var price = urlParams.get('price');
    var fname = getElementVal("fname");
    var lname = getElementVal("lname");
    var addressdetails = getElementVal("addressdetails");
    var contactdetails = getElementVal("contactdetails");
    var number = getElementVal("number");
    var paymentoptions = getElementVal("paymentoptions");
    const model = urlParams.get('model')

    
    saveMessagesFirestore(dbFirestore, imageUrl, itemname, price, fname, lname, addressdetails, contactdetails, number, paymentoptions, model);
    saveMessages(imageUrl, itemname, price,  fname, lname, addressdetails, contactdetails, number, paymentoptions, model);
  }

  function saveMessagesFirestore(db, imageUrl, itemname, price, fname, lname, addressdetails, contactdetails, number, paymentoptions, model) {
    db.collection("contactForm").add({
        imageUrl: imageUrl,
        itemname: itemname,
        price: price,
        fname: fname,
        lname: lname,
        addressdetails: addressdetails,
        contactdetails: contactdetails,
        number: number,
        paymentoptions: paymentoptions,
        model: model,
    });
}

  const saveMessages = (imageUrl, itemname, price, fname, lname, addressdetails, contactdetails, number, paymentoptions, model) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        imageUrl: imageUrl,     // Save the image URL
        itemname: itemname,    // Save the product name
        price: price, 
        fname: fname,
        lname: lname,
        addressdetails: addressdetails,
        contactdetails: contactdetails,
        number: number,
        paymentoptions: paymentoptions,
        model: model,
        
    });
  }
  const getElementVal = (id) =>{
    return document.getElementById(id).value;
  };