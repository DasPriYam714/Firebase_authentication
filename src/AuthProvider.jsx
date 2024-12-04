import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase/firebase.init';


export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);



    // create User 

    const createUser=( email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // add signin method

    const signInUser=(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // get the current user is by setting an observer on the Auth object

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('Current state of logged user:', currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    }, [])

    // User signOut

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }


    const authInfo = { 
        user, 
        loading,
        createUser, 
        signInUser, 
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;




/**
 * 1. create context and export it
 * 2. create provider and set value
 * 3.Use the authProvider at main.jsx
 * 4.Access children in the AuthProvider component as a children.
 */