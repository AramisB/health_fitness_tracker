const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' },
};

// Create a new user (registration)
const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({
      name,
      email,
      password: hashedPassword, // Save hashed password
    });

    await user.save();

    // Generate token
    const token = generateToken(user);

    // Return user info and token
    res.status(201).json({ user: { id: user._id, email: user.email }, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login existing user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Generate token
    const token = generateToken(user);

    // Return user info and token
    res.status(200).json({ user: { id: user._id, email: user.email }, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, loginUser };
