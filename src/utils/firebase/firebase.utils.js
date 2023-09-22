
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth"
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDFoT160xGD_3SqJycWRjr7WC-eVIkku20",
    authDomain: "crown-clothing-c39b5.firebaseapp.com",
    projectId: "crown-clothing-c39b5",
    storageBucket: "crown-clothing-c39b5.appspot.com",
    messagingSenderId: "481420928275",
    appId: "1:481420928275:web:f0b77c4400ca08e2d566e6",
    measurementId: "G-SL61HY7CGW"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvidre = new GoogleAuthProvider(firebaseApp)

googleProvidre.getCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvidre)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvidre)

export const db = getFirestore()

export const createUserDocumentFormAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid)
    console.log(userDocRef)

    const userSnapshort = await getDoc(userDocRef)
    console.log(userSnapshort)
    console.log(userSnapshort.exists())

    if (!userSnapshort.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date();
        try {
            await setDoc(userAuth, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log("error createing the user", error.massage)
        }
    }
    return userDocRef
}