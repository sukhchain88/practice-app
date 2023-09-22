import {
    signInWithGooglePopup,
    createUserDocumentFormAuth,
    signInWithGoogleRedirect
} from "../../../utils/firebase/firebase.utils"


const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        createUserDocumentFormAuth(user)
    }
    const logGoogleRedirectUser = async () => {
        const { user } = await signInWithGoogleRedirect()
        console.log({ user })
    }
    return (
        <div>
            <h1>Sign-In page</h1>
            <button onClick={logGoogleUser}> Sign in With Google Popup</button>
            <button onClick={logGoogleRedirectUser}> Sign in With Google Redirect</button>
        </div>
    )
}

export default SignIn