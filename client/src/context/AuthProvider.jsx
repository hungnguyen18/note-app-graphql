import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth } from 'firebase/auth';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState();

    const auth = getAuth();

    useEffect(() => {
        const unsubcribed = auth.onIdTokenChanged((user) => {
            console.log({ user });
        });

        return () => {
            unsubcribed();
        };
    }, [auth]);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
