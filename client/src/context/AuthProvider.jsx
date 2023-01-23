import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState();

    const auth = getAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribed = auth.onIdTokenChanged((user) => {
            console.log({ user });

            if (user?.uid) {
                setUser(user);
                localStorage.setItem('accessToken', user.accessToken);
                return;
            }

            setUser({});
            localStorage.clear();
            navigate('/login');
        });

        return () => {
            unsubscribed();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth]);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
