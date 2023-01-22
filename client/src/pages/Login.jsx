import React from 'react';
import { Typography, Button } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

function Login() {
    const auth = getAuth();

    const handleLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

        const res = await signInWithPopup(auth, provider);
        console.log({ res });
    };

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
