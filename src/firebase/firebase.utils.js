import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
        apiKey: "AIzaSyCPJyQrOrr6mGVgi4WKeVHj5EtOTTKhgek",
        authDomain: "crwn-db-c11af.firebaseapp.com",
        projectId: "crwn-db-c11af",
        storageBucket: "crwn-db-c11af.appspot.com",
        messagingSenderId: "213250770767",
        appId: "1:213250770767:web:ff37688840a9c8e6ae273a",
        measurementId: "G-SDPK6XLLE1"
    
}

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return; 

    const userRef = firestore.doc(`/users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(err){
            console.log("error creating user: ", err.message)
        }
    }    
    return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;