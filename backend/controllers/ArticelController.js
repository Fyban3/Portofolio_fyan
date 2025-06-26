const Article = require("../model/ArticelModel");

class ModelController {
  constructor() {
    this.model = Article; // 🔗 Hubungkan model ke controller
  }

  async create(req, res) {
    try {
      const data = await this.model.create(req.body);
      res.status(201).json({ data, message: "Created successfully" });
    } catch (error) {
      console.error("Create error:", error);
      res.status(500).json({ error: "Failed to create" });
    }
  }

  async getAll(req, res) {
    try {
      const data = await this.model.findAll();
      res.status(200).json(data);
    } catch (error) {
      console.error("Get all error:", error);
      res.status(500).json({ error: "Failed to fetch data" });
    }
  }

  async getById(req, res) {
    try {
      const data = await this.model.findByPk(req.params.id);
      if (!data) {
        return res.status(404).json({ error: "Not found" });
      }
      res.status(200).json(data);
    } catch (error) {
      console.error("Get by ID error:", error);
      res.status(500).json({ error: "Failed to fetch data" });
    }
  }

  async update(req, res) {
    try {
      const [updated] = await this.model.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) {
        return res.status(404).json({ error: "Not found" });
      }
      res.status(200).json({ message: "Updated successfully" });
    } catch (error) {
      console.error("Update error:", error);
      res.status(500).json({ error: "Failed to update" });
    }
  }

  async delete(req, res) {
    try {
      const deleted = await this.model.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) {
        return res.status(404).json({ error: "Not found" });
      }
      res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
      console.error("Delete error:", error);
      res.status(500).json({ error: "Failed to delete" });
    }
  }
}

module.exports = ModelController;
