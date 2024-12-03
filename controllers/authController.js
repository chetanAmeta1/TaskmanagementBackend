const jwt = require('jsonwebtoken');
const userService = require('../services/userService');
// Secret key for JWT (Keep this safe in an environment variable)
const JWT_SECRET = 'your_jwt_secret_key';

// Mock login function
const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await userService.getUserByEmail(username); 
    // Mock user validation
    if (user && user.password === password) {
        // Payload for the token
        const payload = { user };
        
        // Create the token
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }); // Expires in 1 hour

        res.status(200).json({ message: 'Login successful', token, name:user.name});
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

module.exports = { login };
