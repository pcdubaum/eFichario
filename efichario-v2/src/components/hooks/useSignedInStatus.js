import { useState, useEffect } from 'react';

export function useSignedIsStatus() {

    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {

        if (localStorage.getItem('accessToken') === undefined)
            setIsSignedIn(false);
        else
            setIsSignedIn(true);

    }, []);

    return isSignedIn;
}