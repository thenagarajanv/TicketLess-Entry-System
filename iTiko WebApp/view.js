//initialise firebase
const firebaseConfig = {
    apiKey: "AIzaSyCNFYzHoGSE7X3tfpFRyBNbgLkRyzyaHy8",
    authDomain: "ticket-booking-1fb74.firebaseapp.com",
    databaseURL: "https://ticket-booking-1fb74-default-rtdb.firebaseio.com",
    projectId: "ticket-booking-1fb74",
    storageBucket: "ticket-booking-1fb74.appspot.com",
    messagingSenderId: "332681978143",
    appId: "1:332681978143:web:133ef883f6f16894f2102a"
};

firebase.initializeApp(firebaseConfig);

var iKitoDB = firebase.database().ref("ikiTo");


//view details
let ticketId = document.getElementById("ticketId").innerHTML = Math.floor(Math.random() * 999999) + 100001;

const obj=JSON.parse(localStorage.getItem('personData'))
const cardViewObj=JSON.parse(localStorage.getItem('cardData'))

Object.keys(obj).forEach((item)=>{
    document.getElementById(item).textContent=obj[item];
})

console.log(obj)
console.log(cardViewObj)

let detailObjStore = Object.assign({}, obj);
let cardViewObjStore = Object.assign({}, cardViewObj);
console.log(detailObjStore);
console.log(cardViewObjStore);

document.getElementById("img").src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=
                                        Ticket Id: ${ticketId}, 
                                        Museum: ${detailObjStore.museum}, 
                                        Names: ${detailObjStore.names}, 
                                        Email: ${detailObjStore.email}, 
                                        Phone number: ${detailObjStore.phoneNo}, 
                                        Gender: ${detailObjStore.gender}, 
                                        Adults: ${detailObjStore.adults}, 
                                        Children: ${detailObjStore.children}, 
                                        Total: ₹${detailObjStore.total}, 
                                        Card number: ${cardViewObjStore.cardNumber}, 
                                        Card Holder: ${cardViewObjStore.cardHolder}, 
                                        Payment Successful!!!`


//saveData
const saveData = (ticketId, museum, names, email, phoneNo, gender, adults, children, total, cardNumber, cardHolder) => {
    var newTicketData = iKitoDB.push();
  
    newTicketData.set({
        ticketId: ticketId,
        museum: museum,
        names: names,
        email: email,
        phoneNo: phoneNo,
        gender: gender,
        adults: adults,
        children: children,
        total: total,
        cardNumber: cardNumber,
        cardHolder: cardHolder,
    });
};

saveData(ticketId, detailObjStore.museum, detailObjStore.names, detailObjStore.email, detailObjStore.phoneNo, detailObjStore.gender, detailObjStore.adults, detailObjStore.children, detailObjStore.total, cardViewObjStore.cardNumber, cardViewObjStore.cardHolder);
