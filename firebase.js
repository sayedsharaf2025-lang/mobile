const firebaseConfig = {
apiKey: "ضع API KEY",
authDomain: "ضع authDomain",
databaseURL: "ضع databaseURL",
projectId: "ضع projectId"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

let clients = {};
let packagePrices = {};
