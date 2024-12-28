import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn';
import Register from '../components/Register';
import { useFormContext, useUserContext } from '../context';

const Home = () => {
    const [login, setLogin] = useState(false);
    const { formData } = useFormContext(); 
    const {user} = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            // Navigate based on role
            if (formData.role === 'teacher') {
                navigate('/teacher');
            } else if (formData.role === 'student') {
                navigate('/student');
            }
        }
    }, [user, formData.role, navigate]);

    return (
        <>
            {login ? <SignIn /> : <Register />}
        </>
    );
};

export default Home;
