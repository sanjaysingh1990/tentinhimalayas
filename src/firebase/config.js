// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjcV4BykdV3boinmn_-LQZ4IHgTqUwKvw",
    authDomain: "bubble-2d982.firebaseapp.com",
    databaseURL: "https://bubble-2d982-default-rtdb.firebaseio.com",
    projectId: "bubble-2d982",
    storageBucket: "bubble-2d982.appspot.com",
    messagingSenderId: "680561170660",
    appId: "1:680561170660:web:64598540804f465c7274f1"
};

// Initialize Firebase
let db;
let firebaseApp;

// Check if we're in a browser environment and Firebase is available
if (typeof window !== 'undefined' && typeof firebase !== 'undefined') {
    console.log('Firebase config loaded:', firebaseConfig);

    // Initialize Firebase only if it hasn't been initialized yet
    if (!firebase.apps.length) {
        firebaseApp = firebase.initializeApp(firebaseConfig);
        console.log('Firebase initialized');
    } else {
        firebaseApp = firebase.app();
        console.log('Firebase already initialized, using existing app');
    }

    // Initialize Firestore database if Firestore is available
    if (firebase.firestore) {
        db = firebase.firestore();
        console.log('Firestore database initialized');
    }

    // Make db available globally for backward compatibility
    window.firestoreDB = db;
    window.firebaseApp = firebaseApp;
} else if (typeof firebase !== 'undefined') {
    // For Node.js environment or module imports
    console.log('Firebase config loaded for module use:', firebaseConfig);

    // Initialize Firebase only if it hasn't been initialized yet
    if (!firebase.apps.length) {
        firebaseApp = firebase.initializeApp(firebaseConfig);
        console.log('Firebase initialized for module use');
    } else {
        firebaseApp = firebase.app();
        console.log('Firebase already initialized for module use');
    }

    // Initialize Firestore database if Firestore is available
    if (firebase.firestore) {
        db = firebase.firestore();
        console.log('Firestore database initialized for module use');
    }
}

// Export for module imports
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { db, firebaseApp };
}