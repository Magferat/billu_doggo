

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate(); // Correct usage of useNavigate

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Send login request to backend
            const res = await axios.post("http://localhost:5000/api/auth/login", formData);

            // Log the response to verify the data
            console.log("Login response:", res.data);

            // Store the received token and user information in localStorage
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email,
                bio: res.data.bio,
                birthday: res.data.birthday,
                address: res.data.address,
                role: res.data.role,
            }));

            // Redirect based on the user role
            if (res.data.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/"); // Redirect to the home page after login
            }
        } catch (error) {
            alert(error.response?.data?.message || "Login error!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={handleChange}
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>

            {/* Link to Register page */}
            <p>
                Don't have an account? <a href="/register">Register</a>
            </p>
        </div>
    );
};

export default Login;
