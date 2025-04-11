import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user data from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        // Redirect to login page
        navigate("/login");
    };

    const user = JSON.parse(localStorage.getItem('user'));  // Retrieve user data from localStorage

    if (!user) {
        // If user is not logged in, redirect to login page
        window.location.href = "/login";
        return null;
    }

    return (
        <div>
            <h1>Hello {user.firstName}!</h1>
            <p>Welcome back! Here's your profile info:</p>
            <p>Email: {user.email}</p>
            <p>Bio: {user.bio}</p>
            {/* Render other user details if necessary */}

            {/* Logout Button */}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;
