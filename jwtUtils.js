const jwt = require("jsonwebtoken");

// Function to create a JWT
const createToken = (payload, expiresIn = "1h") => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
};

// Function to verify a JWT
const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        throw new Error("Invalid or expired token");
    }
};

module.exports = { createToken, verifyToken };
