
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

export const createAdmin = async (req, res) => {
  try {
    const { username, password, secretKey } = req.body;

    // Check if the secret key is correct
    if (secretKey !== process.env.ADMIN_SECRET_KEY) {
      return res.status(403).json({ message: "Invalid secret key" });
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    // Create new admin
    const newAdmin = new Admin({ username, password });
    await newAdmin.save();

    res.status(201).json({ message: "Admin created successfully" });
  } catch (error) {
    console.error("Admin creation error:", error);
    res
      .status(500)
      .json({ message: "Failed to create admin", error: error.message });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find admin by username
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    // Check password
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    // Create and send token
    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

export default {
  createAdmin,
  loginAdmin,
};
