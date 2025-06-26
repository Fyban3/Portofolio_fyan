const express = require("express");
const router = express.Router();
const ModelController = require("../controllers/ArticelController");

// Ensure the controller is initialized for the "articles" model
const articleController = new ModelController("articles");

// Define routes for CRUD operations
router.post("/create", async (req, res) => articleController.create(req, res));
router.get("/", async (req, res) => articleController.getAll(req, res));
router.get("/:id", async (req, res) => articleController.getById(req, res));
router.put("/:id", async (req, res) => articleController.update(req, res));
router.delete("/:id", async (req, res) => articleController.delete(req, res));

module.exports = router;
