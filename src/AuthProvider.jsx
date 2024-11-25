import React, { createContext } from 'react';


export const AuthContext = createContext(null);
const authInfo = {name: 'Hello Babu'}

const AuthProvider = ({children}) => {
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