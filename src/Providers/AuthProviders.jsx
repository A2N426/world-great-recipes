import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const UserContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState({})

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const gitHubLogIn = () => {
        return signInWithPopup(auth, gitHubProvider);
    }

    const logOut = ()=>{
        signOut(auth)
    }

    const changeProfile = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            console.log(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const userInfo = {
        user,
        signUp,
        logIn,
        googleLogIn,
        gitHubLogIn,
        changeProfile,
        logOut,
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProviders;