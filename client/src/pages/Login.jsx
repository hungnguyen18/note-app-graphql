import React, { useContext } from 'react';
import { Typography, Button } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

function Login() {
    const auth = getAuth();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

        const res = await signInWithPopup(auth, provider);
        console.log({ res });
    };

    if (user?.uid) {
        navigate('/');
        return;
    }

    return (
        <div>
            <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                Note App
            </Typography>
            <Button variant="outlined" onClick={handleLoginWithGoogle}>
                Login with google
            </Button>
        </div>
    );
}

export default Login;
