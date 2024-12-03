import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from './firebase/firebase.init';


export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null)



    

    const createUser=( email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }


    const authInfo = { user, createUser, signInUser}


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