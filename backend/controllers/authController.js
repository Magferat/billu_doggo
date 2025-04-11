import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// REGISTER
export const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password, bio, birthday, address, role } = req.body;

        // Validate required fields
        if (!firstName || !lastName || !email || !password || !birthday) {
            return res.status(400).json({ message: "All required fields must be provided!" });
        }

        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "Email already registered." });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            bio, // Optional field
            birthday,
            address, // Optional field
            role: 'user',
        });

        await newUser.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error(error); // Log the error to server console for debugging
        res.status(500).json({ message: error.message });
    }
};



// LOGIN
// export const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await User.findOne({ email });
//         if (!user) return res.status(404).json({ message: "User not found" });

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//         const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

//         res.status(200).json({ token, role: user.role });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
// LOGIN
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log('Login attempt with email:', email); // Log email

        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found');  // Log if user doesn't exist
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Password mismatch');  // Log if passwords don't match
            return res.status(400).json({ message: "Invalid credentials" });
        }

        console.log('User found and password matched');  // Log success

        // Create JWT token
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({
            token,
            role: user.role,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            bio: user.bio,
            birthday: user.birthday,
            address: user.address,
        });
    } catch (error) {
        console.error('Error during login:', error);  // Log error
        res.status(500).json({ message: error.message });
    }
};


// 4
