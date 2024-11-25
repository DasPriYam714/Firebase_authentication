import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const Home = () => {
    const authInfo = useContext(AuthContext)
    return (
        <div>
            <p>The name of this website is : {authInfo.name}</p>
            
        </div>
    );
};

export default Home;