const session = require("express-session");
const bcrypt = require("bcrypt");
const adminModel = require("../model/AdminModel");

class AdminController {
  async index(req, res) {
    const admins = await adminModel.findAll();
    res.status(200).json({
      data: admins,
      metadata: "admin endpoint",
    });
  }

  async create(req, res) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res
          .status(400)
          .json({ error: "Username and password are required" });
      }

      // Cek apakah username sudah ada
      const existingAdmin = await adminModel.findOne({ where: { username } });
      if (existingAdmin) {
        return res.status(409).json({ error: "Username already exists" });
      }

      // Hash password sebelum simpan
      const hashedPassword = await bcrypt.hash(password, 10);

      // Simpan admin baru
      const admin = await adminModel.create({
        username,
        password: hashedPassword,
      });

      return res.status(201).json({
        data: admin,
        metadata: "Add admin success",
      });
    } catch (error) {
      console.error("Error creating admin:", error);
      return res.status(500).json({
        error: "Server error",
        details: error.message,
      });
    }
  }

  async createLogin(req, res) {
    const { username, password } = req.body;

    try {
      const adminData = await adminModel.findOne({ where: { username } });
      if (!adminData) {
        return res.status(400).json({ error: "Invalid username or password" });
      }

      const compare = await bcrypt.compare(password, adminData.password);
      if (!compare) {
        return res.status(400).json({ error: "Invalid username or password" });
      }

      // Simpan session
      req.session.username = adminData.username;

      // Kirim data aman tanpa password
      res.status(200).json({
        data: {
          username: adminData.username,
        },
        metadata: "Login successful, session created",
      });
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ error: "An error occurred during login" });
    }
  }

  async indexCheckSession(req, res) {
    if (req.session && req.session.username) {
      return res.status(200).json({
        success: true,
        username: req.session.username,
        message: "User is authenticated",
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }
  }

  async createLogout(req, res) {
    // Pastikan session ada sebelum destroy
    if (!req.session) {
      return res.status(400).json({ message: "No active session" });
    }

    req.session.destroy((err) => {
      if (err) {
        console.error("Session destroy error:", err);
        return res.status(500).json({ message: "Failed to log out" });
      }
      // Clear cookie dengan opsi yang sama seperti saat set cookie
      res.clearCookie("connect.sid", { path: "/" });
      return res.status(200).json({ message: "Logged out successfully" });
    });
  }
}

module.exports = new AdminController();