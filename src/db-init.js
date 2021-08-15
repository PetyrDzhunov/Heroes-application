export default function init() {
    var firebaseConfig = {
        apiKey: "AIzaSyBgcLHM3nJuJwteuW6NPOs2P0gJ7avANEE",
        authDomain: "heroes-application.firebaseapp.com",
        projectId: "heroes-application",
        storageBucket: "heroes-application.appspot.com",
        messagingSenderId: "1093684862818",
        appId: "1:1093684862818:web:b85d0f8146a0c2212b163b"
    }
    firebase.initializeApp(firebaseConfig);
};
// Initialize Firebase