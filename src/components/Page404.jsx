import { useEffect } from 'react';

import Center from './Center.jsx';

import { useNavigate } from 'react-router-dom';

export default function Page404() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 10);
    }, [navigate]);

    return (
        <Center>
        </Center>
    );
}
