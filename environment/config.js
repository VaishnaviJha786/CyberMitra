import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC6iQfO1yO275fItOrzq-_RX7kon3LjlWI",
    authDomain: "cybermitra-92ff0.firebaseapp.com",
    databaseURL: "https://cybermitra-92ff0.firebaseio.com",
    projectId: "cybermitra-92ff0",
    storageBucket: "cybermitra-92ff0.appspot.com",
    messagingSenderId: "806543750024",
    appId: "1:806543750024:web:95aa171fa9df4c5f3ac03d",
    measurementId: "G-WK54J6YFQN"   
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const storage=firebase.storage();
export const firebaseAuth = firebaseApp.auth();