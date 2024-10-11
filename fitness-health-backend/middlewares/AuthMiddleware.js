const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user by ID in the decoded token
    const user = await User.findById(decoded.id);

    // If no user is found
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Attach the user to the request
    req.user = user;
    next();

  } catch (err) {
    console.error('JWT Verification Error:', err.message);
    res.status(403).json({ msg: 'Token is not valid' });
  }
};

module.exports = authenticateToken;
