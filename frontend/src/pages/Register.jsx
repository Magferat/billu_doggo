import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        birthday: "",
        bio: "",  // Optional field
    });

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(""); // To show error messages
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     setErrorMessage(""); // Reset error message before submitting

    //     try {
    //         const res = await axios.post("http://localhost:5000/api/auth/register", formData);
    //         alert(res.data.message);
    //         navigate("/login"); // Redirect to login page after successful registration
    //     } catch (error) {
    //         setErrorMessage(error.response?.data?.message || "Registration failed!");
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage(""); // Reset error message before submitting

        try {
            const res = await axios.post("http://localhost:5000/api/auth/register", formData);
            alert(res.data.message);
            navigate("/login"); // Redirect to login page after successful registration
        } catch (error) {
            // Log the full error to see what went wrong
            console.error(error.response); // This will show the full error response
            setErrorMessage(error.response?.data?.message || "Registration failed!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="birthday"
                    value={formData.birthday}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="bio"
                    placeholder="Bio (optional)"
                    value={formData.bio}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="bio"
                    placeholder="Address (optional)"
                    value={formData.address}
                    onChange={handleChange}
                />
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <button type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    );
};

export default Register;
