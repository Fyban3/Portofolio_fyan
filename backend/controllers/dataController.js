const db = require("../db");

// Add Biodata
exports.createBiodata = (req, res) => {
    const { name, description, photo_url } = req.body;
    const sql = "INSERT INTO biodata (name, description, photo_url) VALUES (?, ?, ?)";
    db.query(sql, [name, description, photo_url], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Biodata added", id: result.insertId });
    });
};

// Add Skill
exports.createSkill = (req, res) => {
    const { name, level } = req.body;
    const sql = "INSERT INTO skills (name, level) VALUES (?, ?)";
    db.query(sql, [name, level], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Skill added", id: result.insertId });
    });
};

// Add Project
exports.createProject = (req, res) => {
    const { title, description, image_url, link } = req.body;
    const sql = "INSERT INTO projects (title, description, image_url, link) VALUES (?, ?, ?, ?)";
    db.query(sql, [title, description, image_url, link], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Project added", id: result.insertId });
    });
};

// Add Admin
exports.createAdmin = (req, res) => {
    const { username, password } = req.body;
    const sql = "INSERT INTO admin (username, password) VALUES (?, ?)";
    db.query(sql, [username, password], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Admin added", id: result.insertId });
    });
};
