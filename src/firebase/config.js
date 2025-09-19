// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCr_tQKCPR0i3IVkxMx40H8HmHd93GvrYc",
    authDomain: "inapp-96885741.firebaseapp.com",
    databaseURL: "https://inapp-96885741.firebaseio.com",
    projectId: "inapp-96885741",
    storageBucket: "inapp-96885741.appspot.com",
    messagingSenderId: "1031749484359",
    appId: "1:1031749484359:web:4416e21fd80f2a7d97d662"
};

console.log('Firebase config loaded:', firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log('Firebase initialized');

// Export Firestore database
const db = firebase.firestore();
console.log('Firestore database initialized:', db);

export { db };